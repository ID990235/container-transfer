// Components/addrcard/addrcard.ts
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    carditem: {
      type: Object
    },
    typestr: {
      type: String
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
