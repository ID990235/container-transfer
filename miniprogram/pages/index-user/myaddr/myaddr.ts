// pages/myaddr/myaddr.ts
Page({
  data: {
    empty: wx.getStorageSync('addaddr') || '',
    cardList: [],
    channel: ""
  },
  onLoad(options) {

  },
  onShow() {
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
  // 添加地址时有点击选中默认地址，则筛选其他都为不默认
  clickRadio(e: any) {
    const addtime = e.detail.target.dataset.time
    const addaddrList = wx.getStorageSync('addaddr')
    let addaddr = addaddrList.map((item: any) => {
      item.checked = false
      if (item.addtime == addtime) {
        item.checked = true
      }
      return item
    });

    this.setData({
      cardList: addaddr
    })

    wx.setStorageSync('addaddr', addaddr)
  },
  // 选中回显地址
  handleGetAddr(e: any) {
    const dataTime = e.detail.currentTarget.dataset.carditem.addtime
    const addaddr = wx.getStorageSync('addaddr')
    let back = false // 记录是否已经把数据给上一个页面
    // 判断是否从选择渠道后来的
    let lastPage = getCurrentPages()[getCurrentPages().length - 2]
    if (lastPage.route === 'pages/common/addaddr/addaddr') {
      addaddr.forEach((item: any) => {
        if (item.addtime == dataTime) {
          const { name, phone, address, city, postcode } = item
          lastPage.setData({
            Name: name,
            Phone: phone,
            Address: address,
            City: city,
            PostCode: postcode,
          })
          back = true
        }
      })
    }

    if (back) {
      wx.navigateBack()
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
  }
})