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
    const countries = wx.getStorageSync('countries')
    if (!countries) return
    this.setData({
      countries: countries
    })
  },
  // 跳转到选择国家页
  selectCountries() {
    wx.navigateTo({
      url: '/pages/index-home/countries/countries'
    })
  },
  // 跳转到复制仓库地址页
  toEntrepotaddr() {
    wx.navigateTo({
      url: '/pages/index-home/entrepotaddr/entrepotaddr'
    })
  },
  // 选择产品转运
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
          url: `/pages/common/addaddr/addaddr?typestr=${obj[res.tapIndex]}&&countries=${_this.data.countries}`
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  // 联系客服
  contact() {
    wx.navigateTo({
      url: "/pages/contactservice/contactservice"
    })
  }
})