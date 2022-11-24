Page({
  data: {
    option1: [
      { text: '筛选', value: 2 },
      { text: '合格', value: 0 },
      { text: '不合格', value: 1 },
      { text: '检测中', value: -1},
    ],
    value1: 2,
    results:[],
  },
  onSwitch1Change({ detail }) {
    this.setData({ value1: detail });
  },

  post_result:function(e){
    console.log('/pages/result/result?index=${e.target.dataset.index}')
    console.log('e.target.dataset.index---->', e.target.dataset.index)
    wx.navigateTo({
      url: '/pages/result/result?index=' + e.target.dataset.index,
    })
  },
  onLoad() {
    const that = this
    wx.request({
      url: getApp().globalData.host+'/record/getRecordListById/'+getApp().globalData.openid,
      method:'GET',
      success:function(res){
        getApp().globalData.results=res.data.data.records
        console.log(getApp().globalData.results)
        that.setData({
          results: getApp().globalData.results
        })
      }
    })
  }
});