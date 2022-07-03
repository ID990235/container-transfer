// index.ts
Page({
  data: {

  },
  onLoad() {

  },
  selectCountries() {
    wx.navigateTo({
      url: '/pages/area/area'
    })
  },
  toEntrepotaddr() {
    wx.navigateTo({
      url: '/pages/entrepotaddr/entrepotaddr'
    })
  }
})
