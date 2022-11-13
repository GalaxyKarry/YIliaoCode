Page({
  data: {
    option1: [
      { text: '合格', value: 0 },
      { text: '不合格', value: 1 },
    ],
    value1: 0,
    results:getApp().globalData.results,
    // results_res:[],
  },

  // chang_pass:function(e){
  //   results_res = []
  //   for(let res in results){
  //     if(res.pass == value1){
  //       results_res.push(res)
  //     }
  //   }
  // },

  post_result:function(e){
    console.log('/pages/result/result?index=${e.target.dataset.index}')
    console.log('e.target.dataset.index---->', e.target.dataset.index)
  
    wx.navigateTo({
      url: '/pages/result/result?index=' + e.target.dataset.index,
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