// Components/order-info/order-info.ts
let _this7: any;
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    orderinfo: Object
  },
  data: {

  },
  lifetimes: {
    attached: function () {
      _this7 = this
    }
  },
  methods: {
    copyorder() {
      _this7.triggerEvent("copyorder")
    }
  }
})
