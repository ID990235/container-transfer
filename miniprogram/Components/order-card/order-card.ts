// Components/order-card/order-card.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {

  },
  methods: {
    handleDetails() {
      this.triggerEvent("handleDetails")
    }
  }
})
