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
    nickName:'',
    comp:[
      {title: '神医', 
        widgets_left: [
        {title: '小野', content: '主治医师', img: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp'},
        {title: '小野', content: '主治医师', img: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp'},
        {title: '小野', content: '主治医师', img: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp'}
        ],
        widgets_right: [
        {title: '小野', content: '主治医师', img: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp'},
        {title: '小野', content: '主治医师', img: '/rsc/u=941056406,1822751651&fm=253&fmt=auto&app=120&f=JPEG.webp'}
        ],
      }]
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
  onLoad(){
    if(getApp().globalData.hasUserInfo){
      this.setData({
        nickName:getApp().globalData.userInfo.nickName,
      })
    }
  }
})