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
  },
  onLoad: function(){
    wx.request({
      url: 'http://localhost:8100/record/all',
      method: 'GET',
      header: {
        'Content-Type': 'application/json' // 默认值
      },
      success(res){
          console.log(res)
      }
    })


  }
});