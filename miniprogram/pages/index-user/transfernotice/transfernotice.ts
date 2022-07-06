// pages/notice/notice.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typestr: "",
    disabled: true,
    buttontext: 5,
  },
  onLoad(options) {
    this.delay()
    const typestr = options.typestr
    if (!typestr) return
    this.setData({
      typestr
    })
  },
  touser() {
    wx.switchTab({
      url: "/pages/Tabbar/user/user"
    })
  },
  // 跳转订单详情页
  toorderdetails() {
    wx.navigateTo({
      url: "/pages/index-order/order-details/order-details"
    })
  },
  // 设置延时器
  delay() {
    let time: any = null
    time = setTimeout(() => {
      if (time) clearTimeout(time)
      let times: Number = this.data.buttontext
      times--
      this.setData({
        buttontext: times
      })
      if (times != 0) {
        this.delay()
      } else {
        this.setData({
          buttontext: '我已悉知',
          disabled: false
        })
      }
    }, 1000)
  }
})