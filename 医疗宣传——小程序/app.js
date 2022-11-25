// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("code: "+res.code)
        wx.request({
          url: getApp().globalData.host+'/user/login',
          data:{
            code:res.code
          },
          success(res){
            console.log(res)
            getApp().globalData.userInfo.nickName=res.data.data.user.username
            getApp().globalData.userInfo.avatarUrl=getApp().globalData.host+'/'+res.data.data.user.avatar
            getApp().globalData.userInfo.telephone=res.data.data.user.phone
            getApp().globalData.password=res.data.data.user.password
            getApp().globalData.openid=res.data.data.user.openid
            if(res.data.data.user.username==null || res.data.data.user.avatar==null || res.data.data.user.phone==null){
              getApp().globalData.hasUserInfo=false
            }
            else if(res.data.data.username!=''){
              getApp().globalData.hasUserInfo=true
            }
            console.log(getApp().globalData.hasUserInfo)
            console.log(getApp().globalData.openid)
            console.log(res)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: {'nickName':'', 'avatarUrl':'','telephone':''},
    password:'',
    results: [],
    hasUserInfo:false,
    openid:'',
    host:'http://172.31.68.191:8100',
    //172.29.41.151
    //172.31.68.191
  }
})
