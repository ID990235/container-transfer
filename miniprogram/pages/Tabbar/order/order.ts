// pages/order/order.ts
Page({

  data: {
    active: 0,
  },

  onLoad() {

  },

  onShow() {

  },
  onChange(event: any) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  // 跳转详情页
  handleDetails() {
    wx.navigateTo({
      url: "/pages/index-order/order-details/order-details"
    })
  }
})