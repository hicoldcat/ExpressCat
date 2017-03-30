var Base64 = require('../../utils/base64.js').Base64;
var MD5 = require('../../utils/md5.min.js');
Page({
  data: {
    result:{},
    focus:false
  },

   formSubmit: function(e) {
    let eorder = e.detail.value.expressorder;
    let self = this;

    if(!eorder){
      wx.showModal({
        title: '提示',
        content: '快递单号不能为空！',
        showCancel: false,
        success: function(res) {
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
    let requestData = "{\"LogisticCode\":\""+eorder+"\"}";
    let eBusinessID = "1237100";
    let requestType = "2002";
    let dataSign = Base64.encode(MD5(requestData+appKey));

    wx.request({
      url: 'http://testapi.kdniao.cc:8081/Ebusiness/EbusinessOrderHandle.aspx',
      data: {
        RequestData:requestData,
        EBusinessID:eBusinessID,
        RequestType:requestType,
        DataSign:dataSign,
        DataType:"2"
      },
      method: 'POST',
      header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function(res){
         wx.navigateTo({
            url: '../detail/detail?LogisticCode=12345678&ShipperCode=YTO&ShipperName=圆通'
          })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },



})
