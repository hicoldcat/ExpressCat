var Base64 = require('../../utils/base64.js').Base64;
var MD5 = require('../../utils/md5.min.js');
Page({
    data: {
        detailList:{}
    },
    onLoad: function (options) {
        let data = options;
        this.getExpressDetail(data);
    },

    getExpressDetail: function (data) {
        var self = this;

        let appKey = "518a73d8-1f7f-441a-b644-33e77b49d846";
        let requestData = "{\"ShipperCode\":\"" + data.ShipperCode + "\",\"LogisticCode\":\"" + data.LogisticCode + "\"}";
        let eBusinessID = "1237100";
        let requestType = "1002";
        let dataSign = Base64.encode(MD5(requestData + appKey));

        wx.request({
            url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx',
            data: {
                RequestData: requestData,
                EBusinessID: eBusinessID,
                RequestType: requestType,
                DataSign: dataSign,
                DataType: "20"
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            success: function (res) {
                let d = {
                    "EBusinessID": "1282662",
                    "ShipperCode": "YTO",
                    "Success": true,
                    "LogisticCode": "12345678",
                    "State": "2",
                    "Traces": [
                        {
                            "AcceptTime": "2016-12-02 11:14:36",
                            "AcceptStation": "快件已到达白鹿司路2号院海棠公社物业前台物业妈妈驿站派件自提请及时取件如有疑问请联系18001279178"
                        },
                        {
                            "AcceptTime": "2017-01-18 10:32:20",
                            "AcceptStation": "【安徽省合肥市政务区柏堰工业园公司】 派件人 : 王耐富 派件中 派件员电话18755105463"
                        },
                        {
                            "AcceptTime": "2017-01-18 10:52:16",
                            "AcceptStation": "【江西省赣州市赣县区公司】 派件人 : 曾鸣 派件中 派件员电话18720121499"
                        },
                        {
                            "AcceptTime": "2017-01-18 11:23:01",
                            "AcceptStation": "【云南省曲靖市宣威市公司】 派件人 : 余凤芹 派件中 派件员电话15687439152"
                        },
                        {
                            "AcceptTime": "2017-01-18 12:55:11",
                            "AcceptStation": "【黑龙江省鸡西市虎林市公司】 派件人 : 付厚君 派件中 派件员电话"
                        },
                        {
                            "AcceptTime": "2017-01-18 13:58:23",
                            "AcceptStation": "【河南省南阳市新野县施庵镇公司】 派件人 : 张彩平 派件中 派件员电话18338335206"
                        }
                    ]
                }


                self.setData({
                    detailList:d
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
})