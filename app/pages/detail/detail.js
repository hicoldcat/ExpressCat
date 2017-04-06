var Base64 = require('../../utils/base64.js').Base64;
var MD5 = require('../../utils/md5.min.js');
var Util = require('../../utils/util.js');
var MockData = require('../../utils/mockdata.js');
Page({
    data: {
        detailList: {},
        expressName: "",
        expressOrder: "",
        expressCode: ""
    },
    onLoad: function (options) {
        wx.showLoading({
            title: '加载中',
        })

        let data = options;
        this.setData({
            expressName: data.ShipperName,
            expressOrder: data.LogisticCode,
            expressCode: data.ShipperCode
        });
        this.getExpressDetail(data);
        wx.setNavigationBarTitle({
            title: '物流详情'
        })
    },

    getExpressDetail: function (data) {
        var self = this;

        if (MockData.env == "mock") {
            let res = MockData.getExpressDetail(data.LogisticCode);
            console.info(res);
            wx.hideLoading()
            let resData = res.data;

            resData.Traces = resData.Traces.sort(function (a, b) {
                let atime = Date.parse(a.AcceptTime);
                let btime = Date.parse(b.AcceptTime);
                return btime - atime;
            });
            console.info(self.data.expressOrder);
            resData.LogoSrc = Util.mapLogo(self.data.expressCode);

            self.setData({
                detailList: resData
            })

            wx.setStorage({
                key: resData.LogisticCode,
                data: resData.Traces.shift()
            })

        } else {
            let appKey = "";//更换成你申请的appkey
            let requestData = "{\"ShipperCode\":\"" + data.ShipperCode + "\",\"LogisticCode\":\"" + data.LogisticCode + "\"}";
            let eBusinessID = "";//更换成你申请的商户id
            let requestType = "1002";
            let dataSign = Base64.encode(MD5(requestData + appKey));

            wx.request({
                url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx',
                data: {
                    RequestData: requestData,
                    EBusinessID: eBusinessID,
                    RequestType: requestType,
                    DataSign: dataSign,
                    DataType: "2"
                },
                method: 'POST',
                header: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                success: function (res) {
                    wx.hideLoading()
                    let resData = res.data;

                    resData.Traces = resData.Traces.sort(function (a, b) {
                        let atime = Date.parse(a.AcceptTime);
                        let btime = Date.parse(b.AcceptTime);
                        return btime - atime;
                    });

                    resData.LogoSrc = Util.mapLogo(resData.ShipperCode);

                    self.setData({
                        detailList: resData
                    })

                    wx.setStorage({
                        key: resData.LogisticCode,
                        data: resData.Traces.shift()
                    })

                },
                fail: function () {
                    // fail
                },
                complete: function () {
                    // complete
                }
            })
        }
    },

    onPullDownRefresh: function () {
        let self = this;
        let data = {
            ShipperName: self.data.expressName,
            LogisticCode: self.data.expressOrder,
            ShipperCode: self.data.expressCode
        }
        this.getExpressDetail(data)
        wx.showLoading({
            title: "正在加载中"
        })
    },

    onShow: function () {
        setTimeout(function () {
            wx.hideLoading()
        }, 100);
    }
})