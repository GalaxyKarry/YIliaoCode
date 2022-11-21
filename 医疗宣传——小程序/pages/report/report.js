Page({
  data: {
    cid: "",
    contect: "",
    picture: "null",
    uid: "",
    tmp: {minHeight: 100, maxHeight: 2000},
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log("event.detail: ", event.detail)
    console.log("data.contect", this.data.contect)
  },
  record:function(){
    wx.request({
      url: 'http://172.31.68.191:8100/feedback/addFeedback/',
      method: 'POST',
      header: {
          "Content-Type": "application/json"
      },
      data: {
        cid: this.data.cid,
        contect: this.data.contect,
        picture: this.data.picture,
        uid: this.data.uid,
      },
      success: (res) => {
          console.log(res.data);
          // 存放用户基本信息
          this.setData({
              userInfo: res.data.userInfo,
              hasUserInfo: true,
              canIUse: true
          })
      }
    })
    console.log(this.data)
    wx.reLaunch({
      url: '/pages/index/index',
    })
},
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let cid = options.cid
    let uid = options.uid
    console.log("options.cid: ", cid)
    console.log("options.uid: ", uid)
    this.setData({
      cid: cid,
      uid: uid
    })
  },
})