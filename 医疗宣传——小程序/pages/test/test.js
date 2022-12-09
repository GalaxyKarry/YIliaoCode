Page({
  postLogin(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  }
})