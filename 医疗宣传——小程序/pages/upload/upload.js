// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: "upload",
  },
  onClick(event) {
    this.setData({active:event.detail});
    wx.reLaunch({
      url: '/pages/'+event.detail+'/'+event.detail,
    })
  },
  onShow(event){
    wx.hideHomeButton();
  },
})