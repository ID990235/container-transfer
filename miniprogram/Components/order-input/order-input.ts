// Components/order-input/order-input.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    inputList: {
      type: []
    },
    value: {
      type: Number
    }
  },

  data: {

  },

  methods: {
    replenishorder() {
      this.triggerEvent("replenishorder")
    },
    deleteorder(e: any) {
      this.triggerEvent("deleteorder", e)
    },
    handleInputChange(e: any) { 
      this.triggerEvent("handleInputChange", e)
    }
  }
})
