// pages/intro/intro.js
Page({

  data: {
    active:'intro'
  },
  onClick(event) {
    this.setData({active:event.detail});
    wx.navigateTo({
      url: '/pages/'+event.detail+'/'+event.detail,
    })
  },
})