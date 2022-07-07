// Components/order-info/order-info.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    orderinfo: Object
  },
  data: {

  },
  methods: {
    copyorder() {
      this.triggerEvent("copyorder", this.data.orderinfo.orderNum)
    }
  }
})
