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

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toReckon() {
      wx.navigateTo({
        url: '/pages/reckon/reckon'
      })
    }
  }
})
