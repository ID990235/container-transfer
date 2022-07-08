// pages/index-order/puy-details/puy-details.ts
Page({

  data: {
    checked: false,
    show: false,
    disabled: true,
    buttontext: '5',
    show1: false,
    ouponsList: [
      {
        theme: "红杉资本优惠券1",
        content: "永久有效 · 所有课程可用",
        sum: "2000.00"
      },
      {
        theme: "红杉资本优惠券2",
        content: "14天后到期 · 指定课程可用",
        sum: "2000.00"
      },
      {
        theme: "红杉资本优惠券3",
        content: "30天后到期 · 指定课程可用",
        sum: "2000.00"
      },
      {
        theme: "红杉资本优惠券4",
        content: "30天后到期 · 指定课程可用",
        sum: "2000.00"
      },
    ],
    radio: 0
  },
  onLoad() {

  },
  handleClick() {
    this.setData({
      checked: !this.data.checked
    })
  },
  // 支付
  handlePay() {
    if (!this.data.checked) {
      this.delay()
      this.setData({
        show: true
      })
    } else {
      wx.navigateTo({
        url: "/pages/index-order/puy-succeed/puy-succeed"
      })
    }
  },
  onClose() {
    this.setData({ show: false, show1: false });
  },
  // 同意条款
  handleAgree() {
    this.setData({
      checked: true,
      show: false
    })
  },
  // 设置延时器
  delay() {
    let time: any = null
    time = setTimeout(() => {
      if (time) clearTimeout(time)
      let times: any = this.data.buttontext
      times--
      this.setData({
        buttontext: times
      })
      if (times != 0) {
        this.delay()
      } else {
        this.setData({
          buttontext: '同意本条款',
          disabled: false
        })
      }
    }, 1000)
  },
  handleSelectCoupons() {
    this.setData({ show1: true })
  },
  onChange(event: any) {
    console.log(event.detail);

    this.setData({
      radio: event.detail,
    });
  },
})