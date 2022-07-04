// pages/user/user.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otherItem: [
      {
        name: "我的地址",
        path: "myaddr"
      },
      {
        name: "我的优惠卷",
      },
      {
        name: "活动中心",
        path: "activity"
      },
      {
        name: "联系客服",
        path: "contactservice"
      },
      {
        name: "转运流程",
        path: "transferflow"
      },
      {
        name: "转运须知",
        path: "notice"
      },
      {
        name: "关于我们",
        path: "aboutus"
      },
    ]
  },
  onLoad() {

  },
  onShow() {

  },
  topage(e: any) {
    const path = e.target.dataset.path
    wx.navigateTo({
      url: `/pages/${path}/${path}`
    })
  }
})