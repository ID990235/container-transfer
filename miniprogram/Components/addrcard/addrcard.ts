// Components/addrcard/addrcard.ts
let _this1: any
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    carditem: {
      type: Object
    }
  },
  data: {
  },
  lifetimes: {
    attached: function () {
      _this1 = this
    }
  },
  methods: {
    // 选择默认地址
    onChange(e: any) {
      _this1.triggerEvent("handleSelectAddr", e)
    },
    handleGetAddr(e: any) {
      _this1.triggerEvent("handlegetaddr", e)
    },
    // 删除地址
    handleDeleteAddr(e: any) {
      _this1.triggerEvent("handleDeleteAddr", e)
    },
    // 更新地址
    handleEditAddr(e: any) {
      _this1.triggerEvent("handleEditAddr", e)
    }
  }
})
