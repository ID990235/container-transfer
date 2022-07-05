// pages/addaddr/addaddr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typestr: "",
    checked: false,
    Name: "",
    Phone: "",
    Address: "",
    City: "",
    PostCode: "",
    Country: "",
    reg: [
      {
        label: "name",
        reg: "[A-Za-z]+",
        prompt: "请确认是否为英文名喔~"
      },
      {
        label: "phone",
        reg: "[0-9]{4,18}",
        prompt: "请确认是否为数字号码，且必须是4到18位数喔~"
      },
      {
        label: "address",
        reg: "[A-Za-z0-9]+",
        prompt: "地址必须是英文或数字喔~"
      },
      {
        label: "city",
        reg: "[A-Za-z]+",
        prompt: "城市名必须是英文喔~"
      },
      {
        label: "postcode",
        reg: "[0-9]{4,10}",
        prompt: "邮政编码必须是数字，且必须是4到10位数~"
      },
    ]
  },

  onLoad(options) {
    let typestr = options.typestr
    this.setData({ typestr })
  },
  onShow() {
    this.echoaddr()
  },
  copyText() {
    wx.setClipboardData({
      data: "集装箱仓库，深圳市龙华区龙华街道工业路壹城环智中心C座2607，13388888888,518000",
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
  onChange({ detail }) {
    this.setData({ checked: detail });
  },
  bindinput(e: any) {
    const labelName = e.target.dataset.name
    const labelvalue = e.detail.value
    this.data.reg.forEach((item: any) => {
      if (labelName == item.label) {
        const reg = new RegExp(`^${item.reg}$`, 'g');
        if (reg.test(labelvalue) != true) {
          wx.showToast({
            title: item.prompt,
            icon: "none"
          })
        }
      }
    })
  },
  // 添加地址
  addaddr() {
    let { Name, Phone, Address, City, PostCode, Country, checked } = this.data
    let addtime = new Date().getTime()
    let obj = {
      Name, Phone, Address, City, PostCode, Country, checked, addtime
    }
    if (Name && Phone && Address && City && PostCode && Country) {
      let getaddaddr = wx.getStorageSync('addaddr')
      // 拼接之前所添加的地址
      let newarr: any = [...getaddaddr]
      newarr.push(obj)

      JSON.stringify(wx.setStorageSync('addaddr', newarr))
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.showToast({
        title: "请先输入完整地址后再添加喔~",
        icon: "none"
      })
    }
  },
  // 选择地址
  selectAddr() {
    wx.navigateTo({
      url: `/pages/myaddr/myaddr?typestr=${this.data.typestr}`
    })
  },
  // 地址回显
  echoaddr() {
    const { Address, City, Country, Name, Phone, PostCode } = wx.getStorageSync('selectaddr')
    this.setData({
      Address, City, Country, Name, Phone, PostCode
    })
    // 回显完成后删除原本添加的
    wx.removeStorage({
      key: 'selectaddr',
      success(res) {
        console.log(res)
      }
    })
  }
})