// pages/index-order/order-details/order-details.ts
Page({
  data: {
    orderinfo: {
      orderNum: 20220509140712345678,
      line: "中国-美国",
      channel: "普通货物",
      fillIn: "待填写",
      dairc: "待入仓",
      daijh: "待拣货",
      daicc: "待出仓",
      daizf: "待支付",
      buyStatus: "待支付",
      buyTime: "2022-05-09 14:07:12",  //  下单时间模拟
      enterEntrepot: "2022-05-18 18:07:12", // 入仓时间模拟
      status: 4,  // 流程状态 0 为待处理(待填写) 1 为有些已入仓有些未入仓 2 为都已入库但点击未打包(可以点击打包) 3为待拣货  4 为待支付(此时返回称重图片、打包备注和分拣备注等)
      packaging: 1, // 模拟打包状态  1 为打包  0 为未打包
    },
    value: "",
    inputList: [],
    disabled: false,
    img: "/images/test.png",
    selectAddr: {}
  },
  onLoad() {
    this.setData({
      selectAddr: wx.getStorageSync("Select")
    })
  },
  onShow() {

  },
  orderaddrcpoy() {
    wx.setClipboardData({
      data: "集装箱仓库，深圳市龙华区龙华街道工业路壹城环智中心C座2607室，13388888888",
      success: function () {
        wx.getClipboardData({
          success: function () {
            wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  },
  // 复制订单
  copyorder(e: any) {
    const orderNum = e.detail.toString()
    wx.setClipboardData({
      data: orderNum,
      success: function () {
        wx.getClipboardData({
          success: function () {
            wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  },
  // 输入快递个数生成数组
  bindinput() {
    const value = Number(this.data.value)
    let arr: any = []
    for (let i = 0; i < value; i++) {
      arr.push({
        disabled: false,
        value: ""
      })
    }
    this.setData({
      inputList: arr
    })

  },
  // 补充快递单号
  replenishorder() {
    let _this = this
    let value: number = Number(this.data.value)

    wx.showModal({
      title: "是否增加快递单号？",
      content: "增加快递单号后，发往转运中心的快递个数+1。是否要继续？",
      confirmColor: "#43bf42",
      success(res: any) {
        if (res.confirm) {
          _this.setData({
            value: (++value).toString()
          })
        }
      }
    })
  },
  // 删除订单号
  deleteorder(e: any) {
    let indexipt = e.detail.target.dataset.index
    let value = Number(this.data.value)
    let arr = this.data.inputList
    arr.splice(indexipt, 1)

    this.setData({
      inputList: arr,
      value: (value - 1).toString()
    })

    if (this.data.inputList.length <= 0) {
      this.setData({
        disabled: false,
        value: ''
      })
    }

  },
  // 输入的时候改变数组里的值
  handleInputChange(e: any) {
    const value = Number(e.detail.detail.value)
    const index = e.detail.target.dataset.index
    let _this = this
    if (value != 0) {
      wx.showModal({
        title: "请确认快递单号是否无误",
        content: `请确认快递单号【${value}】是否无误，一旦提交，不可修改。`,
        confirmColor: "#43bf42",
        success(res: any) {
          if (res.confirm) {
            _this.setData({
              [`inputList[${index}].value`]: value,
              [`inputList[${index}].disabled`]: true,
            })
          }
        }
      })
    }
  },
  // 输入显示多少个框失去标点不可以输入
  handleBindBlur() {
    if (this.data.value != '') {
      this.setData({
        disabled: true,
      })
    }
  },
  // 支付完成跳转保价页面
  handlePuy() {
    wx.navigateTo({
      url: "/pages/index-order/order-valuation/order-valuation"
    })
  },
  // 取消订单
  handleCancel() {
    wx.showModal({
      title: "是否取消订单",
      content: "取消订单后，订单将不能进行后续操作是否要继续？",
      success(res: any) {
        if (res.confirm) {
          console.log('用户取消订单')
        } else if (res.cancel) {
          console.log('用户不取消订单')
        }
      }
    })
  },
  // 放大图片
  handleBigImg() {

  }
})