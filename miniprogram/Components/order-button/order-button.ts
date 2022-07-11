// Components/order-button/order-button.ts
let _this5: any
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
      _this5 = this
    }
  },
  methods: {
    handlePuy() {
      _this5.triggerEvent("handlePuy")
    },
    handleCancel() {
      _this5.triggerEvent("handleCancel")
    }
  }
})
