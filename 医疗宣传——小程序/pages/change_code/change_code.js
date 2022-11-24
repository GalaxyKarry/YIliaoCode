Page({

  data: {
    oldPassword: "",
    newPassword: "",
    confirmedPassword: "",
  },
  return:function(){

    wx.request({
      url: getApp().globalData.host+'/user/updatePassword/'+getApp().globalData.openid+'/'+this.data.oldPassword+'/'+this.data.newPassword,
      method:'POST',
      success(res){
        console.log(res)
      }
    })

    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})