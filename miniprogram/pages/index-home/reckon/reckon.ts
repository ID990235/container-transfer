// pages/reckon/reckon.ts
Page({

  data: {
    channel: "普通货物",
    money: "",
    weight: "",
    volume: ""
  },
  onLoad() {

  },
  // 选择渠道
  channel() {
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

        _this.setData({
          channel: obj[res.tapIndex]
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
})