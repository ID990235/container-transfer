// pages/index-order/order-details/order-details.ts
Page({
  data: {
    orderinfo: {
      orderNum: 20220509140712345678,
      line: "中国-美国",
      channel: "普通货物",
      orderStatus: "待填写",
      buyStatus: "待支付",
      buyTime: "2022-05-09 14:07:12",
      enterEntrepot: "2022-05-18 18:07:12",
      status: 1,
      packaging: 0
    }
  },
  onLoad() {

  },
  onShow() {

  },
  orderaddrcpoy() {
    wx.setClipboardData({
      data: "集装箱仓库，深圳市龙华区龙华街道工业路壹城环智中心C座2607室，13388888888",
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