// index.ts
Page({
  data: {
    liseview: [
      {
        class: "transfer-box",
        bind: "",
        title: "转运须知",
        content: "流程和注意事项",
        img: "../../assets/images/car.png"
      },
      {
        class: "freight-box",
        bind: "toReckon",
        title: "运费估算",
        content: "费用心中有数",
        img: "../../assets/images/calculator.png"
      }],
    show: false,
    countries: ''
  },
  onLoad(options: any) {

  },
  onShow() {
    const countries = JSON.parse(wx.getStorageSync('countries'))
    if (!countries) return
    this.setData({
      countries: countries
    })
  },
  selectCountries() {
    wx.navigateTo({
      url: '/pages/countries/countries'
    })
  },
  toEntrepotaddr() {
    wx.navigateTo({
      url: '/pages/entrepotaddr/entrepotaddr'
    })
  },
  nowTransfer() {
    let _this = this
    wx.showActionSheet({
      itemList: ['普通货物', '电子产品', '液体粉末', '内地EMS', '广东EMS'],
      itemColor: "#73c97c",
      success(res) {
        let obj: Object = {
          0: "普通货物",
          1: "电子产品",
          2: "液体粉末",
          3: "内地EMS",
          4: "广东EMS",
        }
        wx.navigateTo({
          url: `/pages/addaddr/addaddr?typestr=${obj[res.tapIndex]}&&countries=${_this.data.countries}`
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  contact() {
    wx.navigateTo({
      url: "/pages/contactservice/contactservice"
    })
  }
})
