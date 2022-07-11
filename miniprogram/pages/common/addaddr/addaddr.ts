// pages/addaddr/addaddr.ts
const {
  fetchAddAddr, getAddr, updateAddr
} = require("../../../api/addr")
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
        reg: "(13|14|15|17|18|19)[0-9]{9}",
        prompt: "请确认好手机格式，且必须是11位数喔~",
        placeholder: "Please fill in the recipient‘s phone",
        value: ""
      },
      {
        title: "Address:",
        label: "area",
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
        label: "code",
        reg: "[0-9]{6}",
        prompt: "邮政编码必须是数字，且必须是6位数~",
        placeholder: "lease fill in the postcode",
        value: ""
      },
      {
        title: "Country:",
        label: "country",
        reg: "[A-Za-z]+",
        prompt: "选择国家必须是英文喔~",
        placeholder: "lease fill in the country",
        value: ""
      }
    ],
    channel: "",
    editAddr: '',
    memberId: "",
    id: ""
  },
  onLoad(options: any) {
    if ('id' in options) {
      this.getAddr(options)
      this.setData({
        editAddr: options,
        memberId: options.memberId,
        id: options.id
      })
    }
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
  onChange(e: any) {
    this.setData({ checked: e.detail });
  },
  // 添加地址正则判断
  bindinput(e: any) {
    const labelName = e.detail.target.dataset.name
    const labelvalue = e.detail.detail.value
    // input框不等于空才提醒客户
    if (labelvalue != '') {
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
    }
  },
  // 添加地址
  async addaddr() {
    let { id: memberId } = wx.getStorageSync("userinfo")
    let obj: any = { type: 1, status: 0, memberId }
    for (let key in this.data.inputData) {
      obj[this.data.inputData[key].label] = this.data.inputData[key].value
    }

    let { name, phone, area, city, code, country } = obj

    if (name && phone && area && city && code && country) {
      // 有设置默认地址
      if (this.data.checked) {
        obj.status = 1
      }
      const [result, err] = await fetchAddAddr(obj)
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
  // 选择地址-跳转到地址页选择
  selectAddr() {
    wx.navigateTo({
      url: `/pages/index-user/myaddr/myaddr`
    })
  },
  // 点击地址-地址回显
  echoaddr() {
    const { Address, City, Name, Phone, PostCode, Country } = this.data
    console.log(Address);
    
    this.setData({
      [`inputData[0].value`]: Name,
      [`inputData[1].value`]: Phone,
      [`inputData[2].value`]: Address,
      [`inputData[3].value`]: City,
      [`inputData[4].value`]: PostCode,
      [`inputData[5].value`]: Country,
    })
  },
  // 跳转转运须知页面
  totransfer() {
    const { Address, City, Name, Phone, PostCode } = this.data

    let obj: any = {
      address: Address,
      city: City,
      name: Name,
      phone: Phone,
      postcode: PostCode
    }
    if (Address && City && Name && Phone && PostCode) {
      wx.setStorageSync("Select", obj)
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
  },
  // 编辑地址-获取相应地址数据回显
  async getAddr(options: Object) {
    const [result, err] = await getAddr(options)

    this.setData({
      [`inputData[0].value`]: result.data.name,
      [`inputData[1].value`]: result.data.phone,
      [`inputData[2].value`]: result.data.area,
      [`inputData[3].value`]: result.data.city,
      [`inputData[4].value`]: result.data.code,
      [`inputData[5].value`]: result.data.country,
      checked: result.data.status ? true : false
    })
  },
  // 编辑地址-提交
  async handleEditAddr() {
    let obj: any = { status: 0, type: 1, id: this.data.id, memberId: this.data.memberId }
    this.data.inputData.forEach((item: any, index: any) => {
      obj[this.data.inputData[index].label] = item.value
    })
    let { name, phone, area, city, code, country } = obj

    if (name && phone && area && city && code && country) {
      // 有设置默认地址
      if (this.data.checked) {
        obj.status = 1
      }
      const [result, err] = await updateAddr(obj)
      wx.navigateBack()
    } else {
      wx.showToast({
        title: "请先输入完整地址后再提交喔~",
        icon: "none"
      })
    }

  }
})