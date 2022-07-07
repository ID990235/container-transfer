// pages/notice/notice.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    channel: "",
    disabled: true,
    buttontext: 5,
  },
  onLoad(options) {
    this.toBackPage()
    this.delay()
    const typestr = options.typestr
    if (!typestr) return
    this.setData({
      typestr
    })
  },
  touser() {
    // let lastPage = getCurrentPages()[getCurrentPages().length - 2]
    // console.log(lastPage);
    wx.navigateBack()
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
  },
  // 判断上一个页面
  toBackPage() {
    let lastPage = getCurrentPages()[getCurrentPages().length - 2]
    if (lastPage.route === 'pages/common/addaddr/addaddr') {
      this.setData({
        channel: lastPage.data.channel
      })
    }
  }
})