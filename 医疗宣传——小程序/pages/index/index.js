// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo:{},
    hasUserInfo:false,
    active: "index",
  },
  // 事件处理函数
  onLoad() {
    this.setData({
      userInfo: getApp().globalData.userInfo,
      hasUserInfo: getApp().globalData.hasUserInfo,
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onClick(event) {
    this.setData({active:event.detail});
    wx.reLaunch({
      url: '/pages/'+event.detail+'/'+event.detail,
    })
  },
  onShow(){
    wx.hideHomeButton();
  },
  postLogin(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  }
})
