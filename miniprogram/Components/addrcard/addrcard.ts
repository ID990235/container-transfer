// Components/addrcard/addrcard.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    carditem: {
      type: Object
    },
    typestr: {
      type: String
    }
  },
  data: {
  },
  methods: {
    onChange(e: any) {
      this.triggerEvent("addrradio", e)
    },
    getaddr(e: any) {
      const itemdata = e.currentTarget.dataset.cardlist
      const addaddr = wx.getStorageSync('addaddr')
      addaddr.forEach((item: any) => {
        if (item.addtime == itemdata) {
          wx.setStorageSync('selectaddr', item)
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
  }
})
