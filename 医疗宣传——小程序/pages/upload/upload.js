Page({
  data: {
    active: "upload",
    chosenLeft:false,
    chosenUp:false,
    chosenRight:false,
    left:'',
    up:'',
    right:''
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
  chooseLeft(){
    const that = this
    wx.chooseMedia({
      count:1,
      mediaType: ['video'],
      sourceType: ['album'],
      success(res){
        console.log(res)
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
})