// pages/myaddr/myaddr.ts
const {
  fetchAddrLits, SetDefaultAddr, DelectAddr
} = require("../../../api/addr")
Page({
  data: {
    // empty: wx.getStorageSync('addaddr') || '',
    cardList: [],
    channel: ""
  },
  onLoad(options) {

  },
  onShow() {
    this.getAddrList()
    this.toBackPage()
    this.setData({
      cardList: wx.getStorageSync('addaddr'),
      empty: wx.getStorageSync('addaddr')
    })
  },
  // 跳转添加地址页
  addaddr() {
    wx.navigateTo({
      url: "/pages/common/addaddr/addaddr"
    })
  },
  // 有点击选中默认地址，则筛选其他都为不默认
  async handleSelectAddr(e: any) {
    const id = e.detail.target.dataset.id
    const [result, err] = await SetDefaultAddr(id)
    // 选择默认地址时
    let addaddr: any = this.data.cardList.map((item: any) => {
      item.status = 0
      if (item.id == id) {
        item.status = 1
      }
      return item
    })
    this.setData({
      cardList: addaddr
    })
  },
  // 选中回显地址
  handleGetAddr(e: any) {
    const { name, area, code, country, city, phone } = e.detail.currentTarget.dataset.carditem

    let back = false // 记录是否已经把数据给上一个页面
    // 判断是否从选择渠道后来的
    let lastPage = getCurrentPages()[getCurrentPages().length - 2]
    if (lastPage.route === 'pages/common/addaddr/addaddr') {
      lastPage.setData({
        Name: name,
        Phone: phone,
        Address: area,
        City: city,
        PostCode: code,
        Country: country
      })
      wx.navigateBack()
    }

    if (back) {

    }
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
  // 获取地址列表请求
  async getAddrList() {
    let { id } = wx.getStorageSync("userinfo")
    const [result, err] = await fetchAddrLits(id, 1)

    this.setData({
      cardList: result.data
    })
  },
  // 删除地址
  handleDeleteAddr(e: any) {
    const id = e.detail.target.dataset.id
    let _this = this
    wx.showModal({
      title: "是否删除地址",
      content: "确认删除该地址吗",
      async success(res) {
        if (res.confirm) {
          const [result, err] = await DelectAddr(id)
          let arr = _this.data.cardList.filter((item: any) => {
            if (item.id != id) {
              return item
            }
          })
          _this.setData({
            cardList: arr
          })

        }
      }
    })
  },
  // 更新地址
  handleEditAddr(e: any) {
    let { id: memberId } = wx.getStorageSync("userinfo")
    let { id, status, type } = e.detail.target.dataset.carditem

    wx.navigateTo({
      url: `/pages/common/addaddr/addaddr?id=${id}&status=${status}&type=${type}&memberId=${memberId}`
    })
  }
})