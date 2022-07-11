// Components/order-card/order-card.ts
let _this6: any
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {

  },
  lifetimes: {
    attached: function () {
      _this6 = this
    }
  },
  methods: {
    handleDetails() {
      _this6.triggerEvent("handleDetails")
    }
  }
})
