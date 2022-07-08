// pages/addaddr/addaddr.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    Name: "",
    Phone: "",
    Address: "",
    City: "",
    PostCode: "",
    Country: "",
    inputData: [
      {
        title: "Name:",
        label: "name",
        reg: "[A-Za-z]+",
        prompt: "请确认是否为英文名喔~",
        placeholder: "Please fill in the recipient‘s name",
        value: ""
      },
      {
        title: "Phone:",
        label: "phone",
        reg: "[0-9]{4,18}",
        prompt: "请确认是否为数字号码，且必须是4到18位数喔~",
        placeholder: "Please fill in the recipient‘s phone",
        value: ""
      },
      {
        title: "Address:",
        label: "address",
        reg: "[A-Za-z0-9]+",
        prompt: "地址必须是英文或数字喔~",
        placeholder: "Please fill in the address",
        value: ""
      },
      {
        title: "City:",
        label: "city",
        reg: "[A-Za-z]+",
        prompt: "城市名必须是英文喔~",
        placeholder: "Please fill in the city",
        value: ""
      },
      {
        title: "Postcode:",
        label: "postcode",
        reg: "[0-9]{4,10}",
        prompt: "邮政编码必须是数字，且必须是4到10位数~",
        placeholder: "lease fill in the postcode",
        value: ""
      },
    ],
    channel: "",
  },
  onShow() {
    this.echoaddr()
    this.toBackPage()
  },
  // 复制地址
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
  // 添加地址正则判断
  bindinput(e: any) {
    const labelName = e.detail.target.dataset.name
    const labelvalue = e.detail.detail.value
    this.data.inputData.forEach((item: any) => {
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
    let obj = {}
    for (let key in this.data.inputData) {
      obj[this.data.inputData[key].label] = this.data.inputData[key].value
    }

    let addtime = new Date().getTime()
    let { name: Name, phone: Phone, address: Address, city: City, postcode: PostCode } = obj

    if (Name && Phone && Address && City && PostCode) {
      let getaddaddr = wx.getStorageSync('addaddr')
      // 有设置默认地址 判断之前是否已有默认地址
      if (this.data.checked) {
        obj.checked = true
        obj.addtime = addtime
        getaddaddr = this.defaultAddr(getaddaddr)
      }

      // 拼接之前所添加的地址
      let newarr: any = []
      if (getaddaddr) {
        newarr = [...getaddaddr, obj]
      } else {
        newarr.push(obj)
      }

      JSON.stringify(wx.setStorageSync('addaddr', newarr))
      wx.navigateBack()
    } else {
      wx.showToast({
        title: "请先输入完整地址后再添加喔~",
        icon: "none"
      })
    }
  },
  // 监听input框给每项赋值
  commitinput(e: any) {
    const value = e.detail.detail.value
    const name = e.detail.target.dataset.name
    let arr = [...this.data.inputData]

    arr.map((item: any) => {
      if (item['label'] == name) {
        item.value = value
      }
      return item
    })
    this.setData({
      inputData: arr
    })
  },
  // 选择地址
  selectAddr() {
    wx.navigateTo({
      url: `/pages/index-user/myaddr/myaddr`
    })
  },
  // 地址回显
  echoaddr() {
    const { Address, City, Country, Name, Phone, PostCode } = this.data
    this.setData({
      [`inputData[0].value`]: Name,
      [`inputData[1].value`]: Phone,
      [`inputData[2].value`]: Address,
      [`inputData[3].value`]: City,
      [`inputData[4].value`]: PostCode,
    })
  },
  // 是否有默认地址
  defaultAddr(oldData: []) {
    if (!Array.isArray(oldData)) return
    return oldData.map((item: any) => {
      if (item.checked) {
        item.checked = false
      }
      return item
    })
  },
  // 跳转转运须知页面
  totransfer() {
    const { Address, City, Country, Name, Phone, PostCode } = this.data
    if (Address && City && Name && Phone && PostCode) {
      wx.navigateTo({
        url: `/pages/index-user/transfernotice/transfernotice`
      })
    } else {
      wx.showToast({
        title: "请先添加地址喔~",
        icon: "none"
      })
    }
  },
  // 判断上一个页面拿取首页货物渠道
  toBackPage() {
    let lastPage = getCurrentPages()[getCurrentPages().length - 2]

    if (lastPage.route === 'pages/Tabbar/index/index') {
      this.setData({
        channel: lastPage.data.channel
      })
    }
  }
})