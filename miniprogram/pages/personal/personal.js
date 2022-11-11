// pages/personal/personal.js
Page({

    // 页面的初始数据
    data: {
        nickname: "点击登录",
        avatarurl: "../../images/头像.png"
    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        // wx.getSetting({
        //     success:res=>{
        //         if(res.authSetting['scope.userInfo']){
        //             wx.getUserInfo({
        //               success:res=>{
        //                   this.setData({
        //                     avatarurl:res.userInfo.avatarUrl,
        //                     nickname:res.userInfo.nickName
        //                   })
        //               }
        //             })
        //         }
        //     }
        // })
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

    // 获取用户信息
    getuserinfo: function (e) {
        // console.log(e.detail.userInfo)
        this.setData({
            nickname: e.detail.userInfo.nickName,
            avatarurl: e.detail.userInfo.avatarUrl
        })
    },

    // 退出登录
    logout: function () {
        wx.clearStorage({})
        wx.reLaunch({
            url: '../personal/personal',
        })
    }
})