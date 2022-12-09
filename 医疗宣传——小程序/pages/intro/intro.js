Page({

  data: {
    pic:[],
    nickName:'',
    comp:[],
    host:'',
  },
  onShow(event){
    wx.hideHomeButton();
  },
  onLoad(){
    const that = this
    this.setData({
      host:getApp().globalData.host
    })
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
        console.log(res)
      }
    })
    wx.request({
      url: getApp().globalData.host+'/banner/getAllBanner',
      success(res){
        that.setData({
          pic:res.data.data.bannerList
        })
        console.log(res)
      }
    })
  },
  postUpload(){
    wx.reLaunch({
      url: '/pages/upload/upload',
    })
  },
  postIndex(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})