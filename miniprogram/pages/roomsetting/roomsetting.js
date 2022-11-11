// pages/roomsetting/roomsetting.js
Page({

    // 页面的初始数据
    data: {

    },

    // 生命周期函数--监听页面加载   
    onLoad: function (options) {

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

    // 页面设置form-submit请求
    formsubmit: function (e) {
        console.log(e.detail.value.playernum);
        wx.setStorageSync("knum", e.detail.value.playernum)
        wx.setStorageSync("kcnt", e.detail.value.dicecnt)
        wx.setStorageSync("gname1", e.detail.value.giftname1)
        wx.setStorageSync("gnum1", e.detail.value.giftcnt1)
        wx.setStorageSync("gname2", e.detail.value.giftname2)
        wx.setStorageSync("gnum2", e.detail.value.giftcnt2)
        wx.setStorageSync("gname3", e.detail.value.giftname3)
        wx.setStorageSync("gnum3", e.detail.value.giftcnt3)
        wx.setStorageSync("gname4", e.detail.value.giftname4)
        wx.setStorageSync("gnum4", e.detail.value.giftcnt4)
        wx.setStorageSync("gname5", e.detail.value.giftname5)
        wx.setStorageSync("gnum5", e.detail.value.giftcnt5)
        wx.setStorageSync("gname6", e.detail.value.giftname6)
        wx.setStorageSync("gnum6", e.detail.value.giftcnt6)
        wx.setStorageSync("count", e.detail.value.playernum * e.detail.value.dicecnt)
        wx.redirectTo({
            url: '../room/room',
        })
    },
    
    // 左上角回退icon事件绑定函数
    back: function () {
        wx.showModal({
            title: "是否确定退出",
            content: "退出将丢失界面中为确认保存的信息",
            success(res) {
                if (res.confirm) {
                    wx.redirectTo({
                        url: '../room/room',
                    })
                }
            }
        })
    }
})