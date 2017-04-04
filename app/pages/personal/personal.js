var app = getApp()
Page({
  data: {
    motto: '欢迎使用快递喵！',
    userInfo: {},
    expressList: []
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onShow: function () {
    this.setData({
      expressList: []
    })
    this.showMyExpress();
  },

  showMyExpress: function () {
    var self = this;
    try {
      let list = wx.getStorageSync('historySearchList')
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          wx.getStorage({
            key: list[i].order,
            success: function (res) {
              let resobj = res.data;
              resobj.order = list[i].order;
              resobj.name = list[i].name;
              let l = self.data.expressList.slice(0);
              l.push(resobj);
              self.setData({
                expressList: l
              })
            }
          })
        }
      }
    } catch (e) {
      console.warn(e)
    }
  }
})