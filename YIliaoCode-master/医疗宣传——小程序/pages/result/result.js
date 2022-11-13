// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:getApp().globalData.userInfo,
    results:getApp().globalData.results,
  },
  to_record:function(e){
    console.log('e.target.dataset.cid---->', e.target.dataset.cid)
    console.log('e.target.dataset.uid---->', e.target.dataset.uid)
  
    wx.navigateTo({
      url: '/pages/report/report?cid=' + e.target.dataset.cid + '&uid=' + e.target.dataset.uid,
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
      results: getApp().globalData.results[index]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})