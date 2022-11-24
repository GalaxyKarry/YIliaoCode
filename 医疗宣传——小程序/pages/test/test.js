Page({
  data: {
  },
  onLoad(){
    const that = this
    wx.login({
      success: (res) => {
        const code=res.code
        
      },
    })
  },
})