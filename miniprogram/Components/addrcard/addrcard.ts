// Components/addrcard/addrcard.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    carditem: {
      type: Object
    }
  },
  data: {
  },
  methods: {
    onChange(e: any) {
      this.triggerEvent("addrradio", e)
    },
    handleGetAddr(e: any) {
      this.triggerEvent("handlegetaddr", e)
    }
  }
})
