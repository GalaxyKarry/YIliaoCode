// pages/intro/intro.js
Page({

  data: {
    active:'intro',
    pic:{
      pic1: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp',
      pic2: '/rsc/u=464795884,1983259506&fm=253&fmt=auto&app=120&f=JPEG.webp',
      pic3: '/rsc/u=4188778147,2019931444&fm=253&fmt=auto&app=120&f=JPEG.webp'
    },
    margin:"10px",
  },
  onClick(event) {
    this.setData({active:event.detail});
    wx.redirectTo({
      url: '/pages/'+event.detail+'/'+event.detail,
    })
  },
  onShow(event){
    wx.hideHomeButton();
  },
})