// index.js
Page({
  data: {
    showTextAndTitle: true,
    confirmBtn: {
      content: '知道了',
      variant: 'base'
    }
  },
  onLoad(options) {
    var thisView = this;
    wx.showModal({
      title: '鑫光云',
      content: '鑫光云是协鑫绿能系统科技有限公司的光伏开发管理平台',
      showCancel:false,
      confirmText:'前往',
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          thisView.navigateToQG();
          console.log('用户点击确定')
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },
  navigateToQG() {
    console.log("test");
    wx.navigateToMiniProgram({
      appId: 'wx50c31eeed418ab12',
      path: 'pages/index/index',
      success(res) {
        console.log(res);
        // 打开成功
      },
      fail(res) {
        console.log(res);
        // 打开失败
      },
      complete(res) {
        console.log(res);
        // 调用结束  不管成功还是失败都执行
      }
    })
  }
})