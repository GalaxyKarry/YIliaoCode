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
    index:'',
  },
  onSwitch1Change({ detail }) {
    this.setData({ value1: detail });
  },

  post_result:function(e){
    this.setData({
      index:e.currentTarget.dataset['index'],
    })
    console.log(this.data.index)
    wx.navigateTo({
      url: '/pages/result/result?index=' + e.currentTarget.dataset['index'],
    })
  },
  onLoad() {
    const that = this
    wx.request({
      url: getApp().globalData.host+'/record/getRecordListById/',
      header: {
        "Content-Type": "application/json"
      },
      data:{
        openid:getApp().globalData.openid,
      },
      method:'GET',
      success:function(res){
        getApp().globalData.results=res.data.data.records
        that.setData({
          results: getApp().globalData.results
        })
      }
    })
  }
});