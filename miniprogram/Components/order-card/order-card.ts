// Components/order-card/order-card.ts
let that: any
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
      that = this
    }
  },
  methods: {
    handleDetails() {
      this.triggerEvent("handleDetails")
    }
  }
})
