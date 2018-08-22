//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollArray:[
      {
        name:"小里"
      },
      {
        name: "小里"
      },
      {
        name: "小里"
      }
    ],
    array: [
      {
        0: '复合状态',
        1: '已复合',
        2: '待复合'
      },
      {
        0: '结算状态',
        1: '已结算',
        2: '待结算'
      },
      {
        0: '结算状态',
        1: '已结算',
        2: '待结算'
      }
    ]
  },
  bindtap(e){
    console.log(e)
  },
  onLoad: function () {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
