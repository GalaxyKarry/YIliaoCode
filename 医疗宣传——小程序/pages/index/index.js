// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo:{},
    hasUserInfo:false,
  },
  // 事件处理函数
  onLoad() {
    this.setData({
      userInfo: getApp().globalData.userInfo,
      hasUserInfo: getApp().globalData.hasUserInfo,
    })
  },
  onShow(){
    wx.hideHomeButton();
  },
  postIntro(){
    wx.reLaunch({
      url: '/pages/intro/intro',
    })
  },
  postUpload(){
    wx.reLaunch({
      url: '/pages/upload/upload',
    })
  },
  postLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  postResults(){
    wx.navigateTo({
      url: '/pages/result_list/result_list',
    })
  },
  postChangeCode(){
    wx.navigateTo({
      url: '/pages/change_code/change_code',
    })
  }
})
