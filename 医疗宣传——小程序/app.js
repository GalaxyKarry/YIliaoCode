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
