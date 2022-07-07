// pages/index-order/order-valuation/order-valuation.ts
Page({
  data: {
    checked1: true,
    checked2: true,
    premium1: '',
    premium2: '',
    value: "",
  },
  onShow() {

  },
  onChange1({ detail }) {
    this.setData({ checked1: detail });
  },
  onChange2({ detail }) {
    this.setData({ checked2: detail });
  },
  // 计算保价价格
  handleCalculate() {
    let value: number = Number(this.data.value)
    this.setData({
      premium1: "¥ " + value * 0.03,
      premium2: "¥ " + value * 0.02,
    })
  },
  // 用户点击下一步选择购买保险或者承担风险
  handelNextStep() {
    wx.showModal({
      title: "风险告知书",
      content: `尊敬的客户:您好，系统识别到您的订单未投保丢失保险，丢件的概率为万分之三，未购买丢失保险发生丢失的赔付原则为:退运费，按照实际货值赔付但不超过运费价值且最高不超过100美元。请悉知。`,
      cancelText: "购买保险",
      cancelColor: "#c63037",
      confirmText: "承担风险",
      confirmColor: "#88b18c",
      success(res) {
        if (res.confirm) {
          console.log('用户承担保险')
        } else if (res.cancel) {
          console.log('用户购买保险')
        }
      }
    })
  }
})