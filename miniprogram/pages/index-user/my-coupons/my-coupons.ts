// pages/index-user/my-coupons/my-coupons.ts
Page({
  data: {

  },
  onLoad() {

  },
  handleExchange() {
    wx.showModal({
      title: "兑换优惠券",
      editable: true,
      placeholderText: "请输入优惠卷code，进行兑换",
      confirmText: "领取",
      success(res: any) {
        if (res.confirm) {
          console.log(res.content)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})