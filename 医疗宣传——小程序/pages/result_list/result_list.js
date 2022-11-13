Page({
  data: {
    option1: [
      { text: '时间升序', value: 0 },
      { text: '时间降序', value: 1 },
    ],
    value1: 0,
    results:getApp().globalData.results,
  },
  post_result:function(){
    wx.navigateTo({
      url: '/pages/result/result',
    })
  },
  onLoad() {
    //console.log(getApp().globalData)
    this.setData({
      results: getApp().globalData.results
    })
    console.log(this.data.results)
  }
});