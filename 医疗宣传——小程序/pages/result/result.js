// pages/result/result.js
Page({
  data: {
    userInfo:getApp().globalData.userInfo,
    results:getApp().globalData.results,
    videos:{
      left:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      up:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      right:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    },
    host:'',
  },
  to_record:function(e){
    console.log('e.target.dataset.cid---->', e.currentTarget.dataset['cid'])
    console.log('e.target.dataset.uid---->', e.currentTarget.dataset['uid'])
  
    wx.navigateTo({
      url: '/pages/report/report?cid=' + e.currentTarget.dataset['cid'] + '&uid=' + e.currentTarget.dataset['uid'],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    let index = option.index
    console.log("index: ", index)
    console.log(getApp().globalData.results[index])
    this.setData({
      userInfo:getApp().globalData.userInfo,
      results: getApp().globalData.results[index],
      host:getApp().globalData.host,
    })
    console.log(this.data.results)
  },
})