// pages/area/area.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    countriesList: {
      'A': [
        { cnName: "阿尔巴尼亚", enName: "Albania" },
        { cnName: "阿尔及利亚", enName: "Algeria" },
        { cnName: "阿富汗", enName: "Afghanistan" },
        { cnName: "阿根廷", enName: "Argentina" },
        { cnName: "阿曼", enName: "Oman" },
        { cnName: "阿鲁巴岛", enName: "Aruba" },
      ],
      'C': [
        { cnName: "中国(香港，澳门，台湾)", enName: "China" }
      ],
      'P': [
        { cnName: "巴基斯坦", enName: "Pakistan" }
      ],
      'U': [
        { cnName: "美国", enName: "United States" },
        { cnName: "英国", enName: "United Kingdom" },
      ],
    },
    searchResult: '',
    empty: false,
    indexList: []
  },

  onLoad() {

  },
  onShow() {
    this.filterList(this.data.countriesList)
  },
  toSearch(e: any) {
    let newList: any[] = []
    let countriesList = this.data.countriesList
    for (let key in countriesList) {
      newList.push(...countriesList[key])
    }
    let obj: any = {}
    newList.forEach((item) => {
      let reg = /^[^a-z]/
      if (item.cnName.includes(e.detail)) {
        const initial: any = item.enName.match(reg)[0]
        !obj[initial] ? obj[initial] = [item] : obj[initial].push(item)

        this.filterList(obj)
        this.setData({
          searchResult: obj
        })
      }
    })

    // 检查输入的值是否跟每一项都一样  不一样为true
    const booel = newList.every((item) => !item.cnName.includes(e.detail))

    this.setData({
      empty: booel
    })
  },
  filterList(list: any) {
    if (typeof list !== 'object') return
    const indexList = Object.keys(list)
    this.setData({
      indexList
    })
  },
  clearSearch() {
    this.filterList(this.data.countriesList)
    this.setData({
      searchResult: "",
      empty: false
    })
  },
  clickCountries(e: any) {
    const countries = e.target.dataset.item
    wx.redirectTo({
      url: `/pages/index/index?countries=${countries}`
    })
  }
})