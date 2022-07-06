// pages/myaddr/myaddr.ts
Page({
  data: {
    empty: wx.getStorageSync('addaddr') || '',
    cardList: [],
    typestr: ""
  },
  onLoad(options) {
    let typestr = options.typestr
    this.setData({
      typestr
    })
  },
  onShow() {
    this.setData({
      cardList: wx.getStorageSync('addaddr')
    })
  },
  // 跳转添加地址页
  addaddr() {
    wx.navigateTo({
      url: "/pages/common/addaddr/addaddr"
    })
  },
  // 选择默认地址
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

    // let newaddaddr = addaddrList.filter((item: any) => !item.checked)
    // addaddr.push(...newaddaddr)
    this.setData({
      cardList: addaddr
    })

    wx.setStorageSync('addaddr', addaddr)
  }
})