// pages/notice/notice.ts
const {
  fetchNoticeText
} = require("../../../api/user")
Page({

  data: {
    channel: "",
    disabled: true,
    buttontext: '5',
    pagetext: {}
  },
  onLoad(options: any) {
    this.getNoticeText()
    this.toBackPage()
    this.delay()
    const typestr = options.typestr
    if (!typestr) return
    this.setData({
      typestr
    })
  },
  // 返回上一页
  touser() {
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
      let times: any = Number(this.data.buttontext)
      times--
      if (times != 0) {
        this.setData({
          buttontext: times
        })
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
  },
  // 获取页面文字-转运须知
  async getNoticeText() {
    const [result, err] = await fetchNoticeText()

    this.setData({
      pagetext: result.data
    })
  }
})