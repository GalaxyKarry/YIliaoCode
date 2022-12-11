Page({
  return:function(event){
    console.log(event)
    wx.request({
      url: getApp().globalData.host+'/user/updatePassword/',
      data:{
        openid:getApp().globalData.openid,
        oldPassword:event.detail.value.passwordOld,
        newPassword:event.detail.value.password,
      },
      method:'POST',
      header: {
        "Content-Type": "application/json"
      },
      success(res){
        console.log(res)
      }
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})