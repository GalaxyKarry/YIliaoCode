Page({
  data: {
  },
  onLoad(){
    const that = this
    wx.request({
      url: getApp().globalData.host+'/banner/getAllBanner',
      success(res){
        console.log(res)
      }
    })
  },
})