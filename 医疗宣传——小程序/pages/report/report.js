Page({
  data: {
    cid: "",
    contect: "",
    picture: "null",
    uid: "",
    tmp: {minHeight: 100, maxHeight: 2000},
  },
  onChange(event) {
  },
  record:function(){
    console.log(this.data.uid)
    console.log(this.data.cid)
    wx.request({
      url: 'http://172.31.68.191:8100/feedback/addFeedbackById/',
      method: 'POST',
      header: {
          "Content-Type": "application/json"
      },
      data: {
        recordId: this.data.cid,
        content: this.data.contect,
        userId: this.data.uid,
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

  onLoad(options) {
    let cid = options.cid
    let uid = options.uid
    this.setData({
      cid: cid,
      uid: uid
    })
  },
})