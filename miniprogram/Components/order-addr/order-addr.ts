// Components/order-addr/order-addr.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    mailAddr: {
      type: Object
    }
  },

  data: {

  },

  methods: {
    clickCpoy() {
      this.triggerEvent("orderaddrcpoy")
    }
  }
})
