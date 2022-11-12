Page({
  data: {
    option1: [
      { text: '时间升序', value: 0 },
      { text: '时间降序', value: 1 },
    ],
    value1: 0,
  },
  post_result:function(){
    wx.navigateTo({
      url: '/pages/result/result',
    })
  }
});