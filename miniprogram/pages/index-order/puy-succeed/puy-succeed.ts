// pages/index-order/puy-succeed/puy-succeed.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad() {

  },
  handlePayOver() {
    wx.switchTab({
      url: "/pages/Tabbar/order/order"
    })
  }
})