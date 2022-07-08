// Components/packaging-info/packaging-info.ts
let that: any;
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
    handleBigImg() {
      that.triggerEvent("handleBigImg")
    }
  }
})
