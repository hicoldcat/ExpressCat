var Base64 = require('../../utils/base64.js').Base64;
var MD5 = require('../../utils/md5.min.js');
Page({
  data: {
    result:{},
    focus:false
  },

  onLoad: function () {
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

    let appKey = "b2cf3f13-1006-480c-83d5-971f4b5cfd29";
    let requestData = {"LogisticCode":eorder};
    let eBusinessID = "1282662";
    let requestType = "2002";
    let dataSign = Base64.encode(MD5(requestData+appKey));

    console.info(dataSign)
    wx.request({
      url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx',
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
        console.log(res)
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
