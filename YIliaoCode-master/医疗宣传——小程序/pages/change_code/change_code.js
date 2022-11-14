// pages/change_code/change_code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPassword: "",
    newPassword: "",
    confirmedPassword: "",
  },

  onClickIcon(event) {
    // event.detail 为当前输入的值
    console.log("oldPassword: ", event.detail);
    console.log("this.data.oldPassword: ", this.data.oldPassword)
  },

  onClickIcon:function(e){
    console.log("!!!!")
    wx.request({
      url: '',
      method: 'POST',
      header: {
          "Content-Type": "application/json"
      },
      data: {
        
      },
      success: (res) => {
          console.log(res.data);
          // 存放用户基本信息
          this.setData({
              userInfo: res.data.userInfo,
              hasUserInfo: true,
              canIUse: true
          })
      },
      // console.log(this.data)
    })
  },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  return:function(){
    wx.navigateTo({
      url: '/pages/result_list/result_list',
    })
    console.log(getApp().globalData.hasUserInfo)
  }
})