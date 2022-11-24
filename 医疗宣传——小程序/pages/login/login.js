const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    chosenAvatar:false,
  },
  onLoad(){
    wx.hideHomeButton()
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
      chosenAvatar:true,
    })
  },
  onChooseNickname(e){
    console.log(e)
    if(e.detail.value.password!=e.detail.value.passwordConf){
      wx.showToast({
        title: '请输入相同密码',
        icon: 'error'
      })
      return
    }
    if(e.detail.value.tele==''){
      wx.showToast({
        title: '请输入手机号',
        icon: 'error'
      })
      return
    }
    if(e.detail.value.password=='' || e.detail.value.passwordConf==''){
      wx.showToast({
        title: '请输入密码',
        icon: 'error',
      })
      return
    }
    getApp().globalData.userInfo.nickName=e.detail.value.nickName
    getApp().globalData.userInfo.telephone=e.detail.value.tele
    getApp().globalData.password=e.detail.value.password
    getApp().globalData.userInfo.avatarUrl=this.data.avatarUrl
    getApp().globalData.hasUserInfo=true
    console.log(getApp().globalData.userInfo.nickName)
    console.log(getApp().globalData.userInfo.telephone)
    console.log(getApp().globalData.password)
    wx.request({
      url: getApp().globalData.host+'/record/getRecordListById/'+getApp().globalData.openid,
      method:'GET',
      success:function(res){
        getApp().globalData.results=res.data.data.records
      }
    })
    wx.request({
      url: getApp().globalData.host+'/user/register/'+getApp().globalData.openid+'/'+getApp().globalData.userInfo.nickName+'/'+getApp().globalData.password+'/'+getApp().globalData.userInfo.telephone,
      method:'POST',
      success(res){
        console.log(res)
      }
    })
    wx.uploadFile({
      filePath: getApp().globalData.userInfo.avatarUrl,
      name: 'avatar',
      url: getApp().globalData.host+'/user/registerAvatar/'+getApp().globalData.openid,
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})