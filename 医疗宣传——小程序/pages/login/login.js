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
    wx.request({
      url: 'http://172.31.68.191:8100/record/getDetectListById/'+getApp().globalData.userInfo.nickName,
      method:'GET',
      success:function(res){
        console.log("拿到检测结果了")
        for(let i in res.data){
          let mid = {};
          mid=res.data[i];
          getApp().globalData.results.push(mid);
        }
      }
    })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})