// pages/myaddr/myaddr.ts
Page({

  /**
   * 页面的初始数据
   */
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
    this.addcard()
    this.setData({
      empty: wx.getStorageSync('addaddr') || ''
    })
  },
  addcard() {
    if (!wx.getStorageSync('addaddr')) return

    let arr: any = wx.getStorageSync('addaddr')
    arr.map((item: any) => {
      item.firstname = item.Name.slice(0, 1)
      return item
    })

    this.setData({
      cardList: arr
    })
  },
  addaddr() {
    wx.navigateTo({
      url: "/pages/addaddr/addaddr"
    })
  }
})