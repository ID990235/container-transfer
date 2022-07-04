// pages/addaddr/addaddr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
  },

  onLoad(options) {
    let type = options.type
    this.setData({ type })
  },
  onShow() {

  },
  copyText() {
    wx.setClipboardData({
      data: "集装箱仓库，深圳市龙华区龙华街道工业路壹城环智中心C座2607，13388888888,518000",
      success: function () {
        wx.getClipboardData({
          success: function () {
            wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  }
})