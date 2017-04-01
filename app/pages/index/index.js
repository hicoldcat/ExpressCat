var Base64 = require('../../utils/base64.js').Base64;
var MD5 = require('../../utils/md5.min.js');
var util = require('../../utils/util.js');
Page({
  data: {
    result: {},
    focus: false,
    historySearch: []
  },

  onShow: function () {
    this.showHistory();
  },

  formSubmit: function (e) {
    let self = this;
    let eorder = util.trim(e.detail.value.expressorder);

    if (!eorder) {
      wx.showModal({
        title: '提示',
        content: '快递单号不能为空！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            self.setData({
              focus: true
            })
          }
        }
      })
      return;
    }

    let appKey = "518a73d8-1f7f-441a-b644-33e77b49d846";
    let requestData = "{\"LogisticCode\":\"" + eorder + "\"}";
    let eBusinessID = "1237100";
    let requestType = "2002";
    let dataSign = Base64.encode(MD5(requestData + appKey));

    wx.request({
      url: 'http://testapi.kdniao.cc:8081/Ebusiness/EbusinessOrderHandle.aspx',
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
        let LogisticCode = eorder;
        let ShipperName = "圆通";

        try {
          let historySearchList = wx.getStorageSync('historySearchList');
          if (!historySearchList) {
            historySearchList = [];
          };

          let newList = historySearchList.filter(function (val) {
            return (val.order != LogisticCode);
          });

          newList.push({
            "order": LogisticCode,
            "name": ShipperName
          })

          wx.setStorage({
            key: "historySearchList",
            data: newList,
            success: function () {
              wx.navigateTo({
                url: '../detail/detail?LogisticCode=12345678&ShipperCode=YTO&ShipperName=圆通'
              })
            }
          })
        } catch (e) {
          console.log(e);
        }
      }
    })
  },

  deleteHistory: function (e) {
    var self = this;
    try {
      let historySearchList = wx.getStorageSync('historySearchList');

      let newList = historySearchList.filter(function (val) {
        return (val.order != e.currentTarget.dataset.order);
      });

      wx.setStorage({
        key: "historySearchList",
        data: newList,
        success: function () {
          self.showHistory();
        }
      })
    } catch (e) {
      console.log(e);
    }

  },


  showHistory: function () {
    var self = this;
    wx.getStorage({
      key: 'historySearchList',
      success: function (res) {
        self.setData({
          historySearch: res.data
        });
      }
    })
  }
})
