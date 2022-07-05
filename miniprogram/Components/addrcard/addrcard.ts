// Components/addrcard/addrcard.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    cardList: {
      type: Array
    },
    typestr: {
      type: String
    }
  },
  data: {
    radio: wx.getStorageSync("radio"),
  },
  methods: {
    onChange(e: any) {
      wx.setStorageSync("radio", e.detail)
      const addaddrList = wx.getStorageSync('addaddr')
      let addaddr = addaddrList.filter((item: any) => {
        item.checked = false
        if (item.addtime == e.detail) {
        
          item.checked = true
          return item
        }
      });
      let newaddaddr = addaddrList.filter((item: any) => !item.checked)
      addaddr.push(...newaddaddr)
      
      wx.setStorageSync('addaddr', addaddr)

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
