// pages/reckon/reckon.ts
Page({

  data: {
    channel: "普通货物",
    money: "",
    weight: "",
    volume: "",
    channelList: [
      { name: "普通货物", first: 59, continue: 39 },
      { name: "电子产品", first: 69, continue: 49 },
      { name: "液体粉末", first: 79, continue: 59 },
      { name: "广东EMS", first: 128, continue: 49 },
      { name: "内地EMS", first: 128, continue: 35 },
    ]
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
        let obj: any = {
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
  // 预估重量
  handleWeight() {
    let newfirst: any;
    let newcontinue: any;
    this.data.channelList.forEach((item: any) => {
      if (item.name == this.data.channel) {
        newfirst = item.first
        newcontinue = item.continue
      }
    })
    let value: any = Number(this.data.weight)
    if (value) {
      let result = newfirst + (value - 1) * newcontinue
      this.setData({
        money: result
      })
    }
  }
})