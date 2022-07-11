// Components/addrinput/addrinput.ts
let _this2: any
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    inputData: {
      type: Object
    }
  },
  data: {

  },
  lifetimes: {
    attached: function () {
      _this2 = this
    }
  },
  methods: {
    bindinput(e: any) {
      _this2.triggerEvent("mychangeinput", e)
      _this2.triggerEvent("commitinput", e)
    }
  }
})
