Page({

  data: {
    active:'intro',
    pic:[],
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
    wx.request({
      url: getApp().globalData.host+'/banner/getAllBanner',
      success(res){
        that.setData({
          pic:res.data.data.bannerList
        })
      }
    })
  }
})