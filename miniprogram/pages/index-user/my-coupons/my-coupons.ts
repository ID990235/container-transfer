// pages/index-user/my-coupons/my-coupons.ts
const {
  fetchCouponsInfo
} = require("../../../api/user")
Page({
  data: {

  },
  onLoad() {
    this.getUserCoupons()
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
  },
  // 获取个人优惠券信息
  async getUserCoupons() {
    let { id: memberId } = wx.getStorageSync("userinfo")
    let obj: any = {
      memberId,
      page: 1,
      limit: 30,
      orderBy: 20220709095953014902
    }
    const [result, err] = await fetchCouponsInfo(obj)
    console.log(result);
  }
})