// pages/room/room.js
Page({

  // 页面的初始数据
  data: {
    rule_show: false,
    pnum: 1,
    pcnt: 1,
    gname1: "状元奖品名",
    gnum1: 1,
    gname2: "对堂奖品名",
    gnum2: 1,
    gname3: "三红奖品名",
    gnum3: 1,
    gname4: "四进奖品名",
    gnum4: 1,
    gname5: "二举奖品名",
    gnum5: 1,
    gname6: "一秀奖品名",
    gnum6: 1,
    count: 40,
    str1: "",
    playerlist: []
  },

  // 生命周期函数--监听页面加载   
  onLoad: function (options) {
    var v1 = wx.getStorageSync("knum")
    var v2 = wx.getStorageSync("kcnt")
    var v3 = wx.getStorageSync("gname1")
    var v4 = wx.getStorageSync("gnum1")
    var v5 = wx.getStorageSync("gname2")
    var v6 = wx.getStorageSync("gnum2")
    var v7 = wx.getStorageSync("gname3")
    var v8 = wx.getStorageSync("gnum3")
    var v9 = wx.getStorageSync("gname4")
    var v10 = wx.getStorageSync("gnum4")
    var v11 = wx.getStorageSync("gname5")
    var v12 = wx.getStorageSync("gnum5")
    var v13 = wx.getStorageSync("gname6")
    var v14 = wx.getStorageSync("gnum6")
    var v15 = wx.getStorageSync("count")
    var v16
    if (v15 == 0) {
      v16 = "所有玩家投骰子次数为 0 "
    }
    else {
      v16 = "当前轮到 玩家" + ((v1 * v2 - v15) % v1 + 1) + " 投TA的第" + (parseInt(((v1 * v2 - v15) / v1 + 1))) + "次骰子"
    }
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16),
      this.setData({
        pnum: v1,
        pcnt: v2,
        gname1: v3,
        gnum1: v4,
        gname2: v5,
        gnum2: v6,
        gname3: v7,
        gnum3: v8,
        gname4: v9,
        gnum4: v10,
        gname5: v11,
        gnum5: v12,
        gname6: v13,
        gnum6: v14,
        count: v15,
        str: v16,
      })
    wx.setStorageSync("list", this.data.playerlist)
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  // 生命周期函数--监听页面显示
  onShow: function () {
    var v1 = wx.getStorageSync("knum")
    var v2 = wx.getStorageSync("kcnt")
    var v3 = wx.getStorageSync("count")
    var v4
    if (v3 == 0) {
      v4 = "所有玩家投骰子次数为 0 "
    }
    else {
      v4 = "当前轮到 玩家" + ((v1 * v2 - v3) % v1 + 1) + " 投TA的第" + (parseInt(((v1 * v2 - v3) / v1 + 1))) + "次骰子"
    }
    console.log(v1, v2, v3, v4),
      this.setData({
        pnum: v1,
        pcnt: v2,
        count: v3,
        str: v4,
      })
  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  },
  // 规则弹窗
  handlerule: function () {
    console.log("begin"),
      this.setData({
        rule_show: true
      })
  },
  // 跳转设置页面
  gosetting: function () {
    wx.redirectTo({
      url: '../roomsetting/roomsetting',
    })
  },
  // 跳转结果界面
  goresult: function () {
    wx.navigateTo({
      url: '../rank/rank',
    })
  },
  // 奖品列表弹窗
  gogift: function () {
    wx.showModal({
      title: "奖品列表",
      content: "状元奖品: " + this.data.gname1 + " X" + this.data.gnum1 + '\n' + "对堂奖品: " + this.data.gname2 + " X" + this.data.gnum2 + '\n' + "三红奖品: " + this.data.gname3 + " X" + this.data.gnum3 + '\n' + "四进奖品: " + this.data.gname4 + " X" + this.data.gnum4 + '\n' + "二举奖品: " + this.data.gname5 + " X" + this.data.gnum5 + '\n' + "一秀奖品: " + this.data.gname6 + " X" + this.data.gnum6,
      showCancel: false,
    })
  }
})