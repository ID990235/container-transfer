// Components/order-input/order-input.ts
let _this8: any;
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
  lifetimes: {
    attached: function () {
      _this8 = this
    }
  },
  methods: {
    replenishorder() {
      _this8.triggerEvent("replenishorder")
    },
    deleteorder(e: any) {
      _this8.triggerEvent("deleteorder", e)
    },
    handleInputChange(e: any) {
      _this8.triggerEvent("handleInputChange", e)
    }
  }
})
