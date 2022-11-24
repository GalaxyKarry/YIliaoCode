Page({

  data: {
    active:'intro',
    pic:{
      pic1: '/rsc/944a473a4ff55ccb620b2f7f2e342fee.jpeg',
      pic2: '/rsc/u=464795884,1983259506&fm=253&fmt=auto&app=120&f=JPEG.webp',
      pic3: '/rsc/u=4188778147,2019931444&fm=253&fmt=auto&app=120&f=JPEG.webp',
      pic4:'/rsc/屏幕截图 2022-11-22 094537.png'
    },
    nickName:'',
    comp:[],
  },
  onClick(event) {
    this.setData({active:event.detail});
    wx.reLaunch({
      url: '/pages/'+event.detail+'/'+event.detail,
    })
  },
  onShow(event){
    wx.hideHomeButton();
  },
  onLoad(){
    const that = this
    if(getApp().globalData.hasUserInfo){
      this.setData({
        nickName:getApp().globalData.userInfo.nickName,
      })
    }
    wx.request({
      url: getApp().globalData.host+'/largeComponent/getLargeAndSmallComponent',
      success(res){
        that.setData({
          comp:res.data.data.lsList
        })
      }
    })
  }
})