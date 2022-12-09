Page({
  data: {
    oldPassword: "",
    newPassword: "",
    confirmedPassword: "",
  },
  return:function(){

    wx.request({
      url: getApp().globalData.host+'/user/updatePassword/',
      data:{
        openid:getApp().globalData.openid,
        oldPassword:this.data.oldPassword,
        newPassword:this.data.newPassword,
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