// Components/order-addr/order-addr.ts
let _this4: any
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    selectAddr: {
      type: Object
    },
  },

  data: {

  },
  lifetimes: {
    attached: function () {
      _this4 = this
    }
  },
  methods: {
    clickCpoy() {
      _this4.triggerEvent("orderaddrcpoy")
    }
  }
})
