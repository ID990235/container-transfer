// Components/order-button/order-button.ts
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
    handlePuy() { 
      this.triggerEvent("handlePuy")
    }
  }
})
