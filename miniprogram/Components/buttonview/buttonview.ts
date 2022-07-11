// Component/buttonview/buttonview.ts
let _this3: any
Component({

  options: {
    multipleSlots: true
  },
  properties: {
    liseview: {
      type: Array,
      value: [],
    }
  },
  data: {

  },
  lifetimes: {
    attached: function () {
      _this3 = this
    }
  },
  methods: {
    handleJump(e: any) {
      _this3.triggerEvent("handleJump", e)
    }
  }
})
