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
        sum: "500.00"
      },
      {
        theme: "红杉资本优惠券3",
        content: "30天后到期 · 指定课程可用",
        sum: "1000.00"
      },
      {
        theme: "红杉资本优惠券4",
        content: "30天后到期 · 指定课程可用",
        sum: "1500.00"
      },
    ],
    radio: 0,
    sum: 0,
    addrinfo: {
      name: "HM Zheng",
      phone: "13388888888",
      addr: "MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA"
    }
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
      this.setData({
        show: true,
        buttontext: "5",
        disabled: true
      })
      this.delay()
    } else {
      wx.navigateTo({
        url: "/pages/index-order/puy-succeed/puy-succeed"
      })
    }
  },
  // 打开底部弹窗
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

      if (times != 0) {
        this.setData({
          buttontext: times
        })
        this.delay()
      } else {
        this.setData({
          buttontext: '同意本条款',
          disabled: false
        })
      }
    }, 1000)
  },
  // 选择优惠券
  async handleSelectCoupons() {
    this.setData({ show1: true })
  },
  // 确认使用哪一张优惠券
  handleConfirm() {
    this.data.ouponsList.forEach((item: any, index: any) => {
      if (index == this.data.radio) {
        this.setData({
          sum: item.sum,
          show1: false
        })
      }
    })
  },
  // 点击优惠券选择哪一张
  handleClickCoupons(e: any) {
    const index = e.target.dataset.index
    this.setData({
      radio: index,
    });
  }
})