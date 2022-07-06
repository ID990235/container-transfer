// Components/addrinput/addrinput.ts
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
  methods: {
    bindinput(e: any) {
      this.triggerEvent("mychangeinput", e)
      this.triggerEvent("commitinput", e)
    }
  }
})
