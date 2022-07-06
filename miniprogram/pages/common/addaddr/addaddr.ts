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
    const Name = this.data.inputData[0].value
    const Phone = this.data.inputData[1].value
    const Address = this.data.inputData[2].value
    const City = this.data.inputData[3].value
    const PostCode = this.data.inputData[4].value
    const checked = this.data.checked

    let addtime = new Date().getTime()
    let obj = {
      Name, Phone, Address, City, PostCode, checked, addtime
    }
    if (Name && Phone && Address && City && PostCode ) {
      let getaddaddr = wx.getStorageSync('addaddr')
      // 判断之前是否已有默认地址
      if (checked) {
        getaddaddr = this.defaultAddr(getaddaddr)
      }
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
      url: `/pages/index-user/myaddr/myaddr?typestr=${this.data.typestr}`
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
  // 跳转转运页面
  totransfer() {
    wx.navigateTo({
      url: `/pages/index-user/transfernotice/transfernotice?typestr=${this.data.typestr}`
    })
  }
})