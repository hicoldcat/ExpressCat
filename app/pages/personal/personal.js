var app = getApp()
Page({
  data: {
    motto: '欢迎使用快递喵！',
    userInfo: {}
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})