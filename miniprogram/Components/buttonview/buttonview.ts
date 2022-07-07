// Component/buttonview/buttonview.ts
Component({
  /**
   * 组件的属性列表
   */
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
  methods: {
    handleJump(e: any) {
      this.triggerEvent("handleJump", e)
    }
  }
})
