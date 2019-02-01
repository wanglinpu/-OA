
//获取应用实例
const app = getApp()

Page({
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
swichNav: function (e) {
  var that = this;
  if (this.data.swiperCurrent === e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      swiperCurrent: e.target.dataset.current,
    })
  }
},
swiperChange: function (e) {
  this.setData({
    swiperCurrent: e.detail.current,
  })
},
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
   
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
   swipclick: function (e) {
        console.log(this.data.swiperCurrent);    
        wx.switchTab({   
          url: this.data.links[this.data.swiperCurrent]  
        })   
      },
  getUserInfo: function(e) {
 
  }
})
