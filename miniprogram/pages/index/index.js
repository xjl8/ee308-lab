// pages/index/index.js
Page({

    // 页面的初始数据
    data: {

    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        wx.setStorageSync("knum", 4)
        wx.setStorageSync("kcnt", 5)
        wx.setStorageSync("gname1", "状元奖品名")
        wx.setStorageSync("gnum1", 1)
        wx.setStorageSync("gname2", "对堂奖品名")
        wx.setStorageSync("gnum2", 1)
        wx.setStorageSync("gname3", "三红奖品名")
        wx.setStorageSync("gnum3", 1)
        wx.setStorageSync("gname4", "四进奖品名")
        wx.setStorageSync("gnum4", 1)
        wx.setStorageSync("gname5", "二举奖品名")
        wx.setStorageSync("gnum5", 1)
        wx.setStorageSync("gname6", "一秀奖品名")
        wx.setStorageSync("gnum6", 1)
        wx.setStorageSync("count", 5 * 4)
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady: function () {

    },

    // 生命周期函数--监听页面显示
    onShow: function () {

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
})