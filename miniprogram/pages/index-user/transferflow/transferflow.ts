// pages/transferflow/transferflow.ts
const {
  fetchProcessText
} = require("../../../api/user")
Page({

  data: {
    pagetext: {}
  },
  onLoad() {
    this.getProcessText()
  },
  // 返回上一页
  touser() {
    wx.navigateBack()
  },
  // 获取页面文字-转运流程
  async getProcessText() {
    const [result, err] = await fetchProcessText()
    
    this.setData({
      pagetext: result.data
    })
  }
})