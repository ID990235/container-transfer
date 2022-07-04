// pages/myaddr/myaddr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty: true
  },
  onLoad() {

  },
  onShow() {

  },
  addaddr() {
    wx.navigateTo({
      url: "/pages/addaddr/addaddr"
    })
  }
})