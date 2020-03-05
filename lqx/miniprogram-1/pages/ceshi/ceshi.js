// pages/ceshi/ceshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:'测试数据'
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

  },
  test_network:function(){
    wx.request({
      url: 'http://www.baidu.com',
      method:"GET",
      header:{},
      success:function(res){
        console.log('请求成功:'+res.data)
      },
      fail:function(res){
        console.log('请求失败:'+res.errMsg)
      }
    })
  },
  save:function(){
    console.log('save...')
    wx.setstorage({
      key:'text',
      data:'我是保存的数据'})
  },
  read:function(){
    wx.getStorage({
      ket:'text',
      success:function(res){
        console.log('读取成功:'+res.data)
      },
      fail:function(res){
        console.log('读取失败:'+res.errMsg)
      }
    })
  },
  remove:function(){
    wx.removeStorage({
      key: 'text',
      success: function(res) {
        console.log('remove ok')
        //console.log('rremove'+key+'成功')
      },
    })
  },
  clear:function(){
    console.log('清除')
    wx.clearStorage()
  }
})