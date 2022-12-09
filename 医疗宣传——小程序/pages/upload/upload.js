Page({
  data: {
    chosenLeft:false,
    chosenUp:false,
    chosenRight:false,
    left:'',
    up:'',
    right:'',
    time:'',
    hasUserInfo:false,
  },
  onLoad(event){
    this.setData({
      hasUserInfo:getApp().globalData.hasUserInfo,
    })
  },
  onShow(event){
    wx.hideHomeButton();
  },
  chooseLeft(){
    const that = this
    wx.chooseMedia({
      count:1,
      mediaType: ['video'],
      sourceType: ['album'],
      sizeType:['compressed'],
      success(res){
        console.log("111 "+res)
        that.setData({
          left:res.tempFiles[0].tempFilePath,
          chosenLeft:true
        })
        console.log(that.data.left)
      }
    })
  },
  deleLeft(){
    this.setData({
      chosenLeft:false,
      left:''
    })
  },
  chooseUp(){
    const that = this
    wx.chooseMedia({
      count:1,
      mediaType: ['video'],
      sourceType: ['album'],
      sizeType:['compressed'],
      success(res){
        console.log(res)
        that.setData({
          up:res.tempFiles[0].tempFilePath,
          chosenUp:true
        })
      }
    })
  },
  deleUp(){
    this.setData({
      chosenUp:false,
      up:''
    })
  },
  chooseRight(){
    const that = this
    wx.chooseMedia({
      count:1,
      mediaType: ['video'],
      sourceType: ['album'],
      sizeType:['compressed'],
      success(res){
        console.log(res)
        that.setData({
          right:res.tempFiles[0].tempFilePath,
          chosenRight:true
        })
      }
    })
  },
  deleRight(){
    this.setData({
      chosenRight:false,
      right:''
    })
  },
  getTime(){
    var year=new Date().getFullYear()
    var month=new Date().getMonth()+1
    var day=new Date().getDate()
    var hour=new Date().getHours()
    var minute=new Date().getMinutes()
    var second=new Date().getSeconds()
    this.setData({
      time:year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
    })
  },
  upLoad(){
    this.getTime()
    console.log(this.data.time)
    wx.uploadFile({
      filePath: this.data.left,
      name: 'file',
      url: getApp().globalData.host+'/record/uploadVideo/'+getApp().globalData.openid+'/'+this.data.time+'/left',
      success(res){
        console.log(res)
      }
    })
    wx.uploadFile({
      filePath: this.data.up,
      name: 'file',
      url: getApp().globalData.host+'/record/uploadVideo/'+getApp().globalData.openid+'/'+this.data.time+'/up',
      success(res){
        console.log(res)
      }
    })
    wx.uploadFile({
      filePath: this.data.right,
      name: 'file',
      url: getApp().globalData.host+'/record/uploadVideo/'+getApp().globalData.openid+'/'+this.data.time+'/right',
      success(res){
        console.log(res)
      }
    })
    this.deleLeft()
    this.deleUp()
    this.deleRight()
  },
  postIntro(){
    wx.reLaunch({
      url: '/pages/intro/intro',
    })
  },
  postIndex(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  postLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})