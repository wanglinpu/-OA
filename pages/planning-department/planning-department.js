// pages/planning-department/planning-department.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    selected:true,
    selected1:false,
    open:false,
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/news.png'
      }, {
        link: '/pages/logs/logs',
        url: '../../images/news.png'
      }, {
        link: '/pages/index/index',
        url: '../../images/news.png'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 1000,  //滑动时间
  },
  selected:function(e){
    this.setData({
        selected1:false,
        selected:true
    })
},
selected1:function(e){
    this.setData({
        selected:false,
        selected1:true
    })
},
  showitem:function(){
    this.setData({
        open:!this.data.open
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})