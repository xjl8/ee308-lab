// pages/game/game.js 
const app = getApp()
Page({

    // 页面的初始数据
    data: {
        dicepath1: "../../images/1.jpg",
        dicepath2: "../../images/1.jpg",
        dicepath3: "../../images/1.jpg",
        dicepath4: "../../images/1.jpg",
        dicepath5: "../../images/1.jpg",
        dicepath6: "../../images/1.jpg",
        count: 1,
        tap: true,
        buttype: false,
        tip1: "恭喜你！",
        tip2: "状元插金花",
        retshow: false,
        playerlist: [],
        pnum: 8,
        pcnt: 5,
        str1: ""
    },

    // 生命周期函数--监听页面加载 
    onLoad: function (options) {

    },

    // 生命周期函数--监听页面初次渲染完成 
    onReady: function () {

    },

    // 生命周期函数--监听页面显示
    // 从页面共享数据读
    onShow: function () {
        var v1 = wx.getStorageSync("knum")
        var v2 = wx.getStorageSync("kcnt")
        var v3 = wx.getStorageSync("count")
        this.setData({
            pnum: v1,
            pcnt: v2,
            count: v3
        })
        var arr = wx.getStorageSync("list")
        var str = "当前轮到 玩家" + ((this.data.pnum * this.data.pcnt - this.data.count) % this.data.pnum + 1) + " 投TA的第" + parseInt(((this.data.pnum * this.data.pcnt - this.data.count) / this.data.pnum + 1)) + "次骰子"
        this.setData({
            str1: str,
            playerlist: arr
        })
    },

    // 生命周期函数--监听页面隐藏 
    // 当页面隐藏时写页面共享存储
    onHide: function () {
        wx.setStorageSync("count", this.data.count)
        wx.setStorageSync("list", this.data.playerlist)
    },

    // 生命周期函数--监听页面卸载 
    // 当页面卸载时写页面共享存储
    onUnload: function () {
        wx.setStorageSync("count", this.data.count)
        wx.setStorageSync("list", this.data.playerlist)
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

    // 骰子随机生成结果并执行动画
    init: function () {
        // 通过随机数生成结果
        var arr = this.randomFun();
        var dice1 = '../../images/' + (arr[0] + 1) + '.jpg';
        this.setData({
            dicepath1: dice1
        })
        var dice2 = '../../images/' + (arr[1] + 1) + '.jpg';
        this.setData({
            dicepath2: dice2
        })
        var dice3 = '../../images/' + (arr[2] + 1) + '.jpg';
        this.setData({
            dicepath3: dice3
        })
        var dice4 = '../../images/' + (arr[3] + 1) + '.jpg';
        this.setData({
            dicepath4: dice4
        })
        var dice5 = '../../images/' + (arr[4] + 1) + '.jpg';
        this.setData({
            dicepath5: dice5
        })
        var dice6 = '../../images/' + (arr[5] + 1) + '.jpg';
        this.setData({
            dicepath6: dice6
        })
        // 执行动画
        var audio = wx.createInnerAudioContext()
        var url = "audio/dice_audio.mp3"
        audio.src = url 
        audio.play()
        this.animate('#redpacket0', [
            { top: "10px", left: "10px", },
            { top: "30px", left: "20px", rotate: (360) },
            { top: "70px", left: "34px", rotate: (720), },
            { top: "100px", left: "44px", rotate: (1080), },
            { top: "130px", left: "57px", rotate: (1440), },
            { top: "150px", left: "69px", rotate: (3600), },
            { top: "140px", left: "77px", rotate: (2160), },
            { top: "148px", left: "64px", rotate: (2520), },
            { top: "170px", left: "40px", rotate: (3240), },
            { top: "181px", left: "99px" },
        ], 1500, function () { }.bind(this));
        this.animate('#redpacket1', [
            { top: "10px", left: "10px", },
            { top: "30px", left: "40px", rotate: (360) },
            { top: "70px", left: "54px", rotate: (720), },
            { top: "100px", left: "64px", rotate: (1080), },
            { top: "130px", left: "77px", rotate: (1440), },
            { top: "150px", left: "80px", rotate: (3600), },
            { top: "140px", left: "104px", rotate: (2160), },
            { top: "148px", left: "134px", rotate: (2520), },
            { top: "170px", left: "174px", rotate: (3240), },
            { top: "145px", left: "200px" },
        ], 1500, function () { }.bind(this));
        this.animate('#redpacket2', [
            { top: "10px", left: "10px", },
            { top: "48px", left: "50px", rotate: (360) },
            { top: "70px", left: "70px", rotate: (720), },
            { top: "100px", left: "80px", rotate: (1080), },
            { top: "130px", left: "77px", rotate: (1440), },
            { top: "150px", left: "80px", rotate: (3600), },
            { top: "140px", left: "134px", rotate: (2160), },
            { top: "190px", left: "150px", rotate: (2520), },
            { top: "171px", left: "174px", rotate: (3240), },
            { top: "180px", left: "187px" },
        ], 1500, function () { }.bind(this));
        this.animate('#redpacket3', [
            { top: "10px", left: "10px", },
            { top: "48px", left: "50px", rotate: (360) },
            { top: "70px", left: "100px", rotate: (720), },
            { top: "100px", left: "130px", rotate: (1080), },
            { top: "130px", left: "140px", rotate: (1440), },
            { top: "150px", left: "150px", rotate: (3600), },
            { top: "140px", left: "160px", rotate: (2160), },
            { top: "190px", left: "150px", rotate: (2520), },
            { top: "171px", left: "174px", rotate: (3240), },
            { top: "133px", left: "167px" },
        ], 1500, function () { }.bind(this));
        this.animate('#redpacket4', [
            { top: "10px", left: "10px", },
            { top: "50px", left: "70px", rotate: (360) },
            { top: "100px", left: "90px", rotate: (720), },
            { top: "130px", left: "100px", rotate: (1080), },
            { top: "130px", left: "120px", rotate: (1440), },
            { top: "150px", left: "130px", rotate: (3600), },
            { top: "140px", left: "144px", rotate: (2160), },
            { top: "190px", left: "177px", rotate: (2520), },
            { top: "171px", left: "153px", rotate: (3240), },
            { top: "173px", left: "147px" },
        ], 1500, function () { }.bind(this));
        this.animate('#redpacket5', [
            { top: "10px", left: "10px", },
            { top: "30px", left: "20px", rotate: (360) },
            { top: "70px", left: "34px", rotate: (720), },
            { top: "90px", left: "44px", rotate: (1080), },
            { top: "100px", left: "57px", rotate: (1440), },
            { top: "120px", left: "69px", rotate: (3600), },
            { top: "130px", left: "77px", rotate: (2160), },
            { top: "128px", left: "64px", rotate: (2520), },
            { top: "135px", left: "80px", rotate: (3240), },
            { top: "141px", left: "99px" },
        ], 1500, function () { }.bind(this));
        // 更新提示语
        var str = "当前轮到 玩家" + ((this.data.pnum * this.data.pcnt - this.data.count) % this.data.pnum + 1) + " 投TA的第" + (parseInt((this.data.pnum * this.data.pcnt - this.data.count) / this.data.pnum + 1)) + "次骰子";
        // 定时器实现等待动画结束后判断结果
        setTimeout(function () {
            this.judge(arr, (this.data.pnum * this.data.pcnt - this.data.count - 1) % this.data.pnum);
            var that = this;
            this.setData({
                str1: str
            })
        }.bind(this), 2500)
    },

    // 随机生成结果
    randomFun: function () {
        var arr = [];
        for (var i = 0; i < 6; i++) {
            arr.push(Math.floor(Math.random() * 6));
        }
        return arr;
    },

    // 开始骰子的事件绑定函数
    begin: function () {
        console.log("begin");
        if (this.data.count === 0) {
            wx.showModal({
                title: "次数耗尽",
                content: "请点击确认返回",
                showCancel: false,
                success(res) {
                    if (res.confirm) {
                        wx.navigateBack({
                            delta: 1,
                        })
                    }
                }
            })
        }
        else {
            var num = this.data.count;
            num--;
            this.setData({
                buttype: true,
                tap: false,
                count: num
            })
            this.init();
        }
    },

    // 结果判断函数
    judge: function (arr, i) {
        var jdarr = new Array(6);
        var ret = new Array(12);
        for (var index = 0; index < jdarr.length; index++) {
            jdarr[index] = 0;
        }
        for (var index = 0; index < ret.length; index++) {
            ret[index] = 0;
        }
        for (var index = 0; index < jdarr.length; index++) {
            jdarr[arr[index]]++;
        }
        if (jdarr[3] === 4 && jdarr[0] == 2) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元插金花"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元插金花");
        }
        else if (jdarr[3] === 6) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元红六勃"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元红六勃");
        }
        else if (jdarr[0] === 6) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元遍地锦"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元遍地锦");
        }
        else if (jdarr[2] === 6) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元黑六勃"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元黑六勃");
        }
        else if (jdarr[3] === 5) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元五红"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元五红");
        }
        else if (jdarr[1] === 5) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元五子登科"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元五子登科");
        }
        else if (jdarr[3] === 4) {
            this.setData({
                tip1: "恭喜你",
                tip2: "状元四红"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了状元四红");
        }
        else if (jdarr[0] === 1 && jdarr[1] === 1 && jdarr[2] === 1 && jdarr[3] === 1 && jdarr[4] === 1 && jdarr[5] === 1) {
            this.setData({
                tip1: "恭喜你",
                tip2: "榜眼对堂"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了榜眼对堂");
        }
        else if (jdarr[3] === 3) {
            this.setData({
                tip1: "恭喜你",
                tip2: "探花三红"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了探花三红");
        }
        else if (jdarr[0] === 4||jdarr[1] === 4||jdarr[2] === 4||jdarr[4] === 4||jdarr[5] === 4) {
            this.setData({
                tip1: "恭喜你",
                tip2: "进士四进"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了进士四进");
        }
        else if (jdarr[3] === 2) {
            this.setData({
                tip1: "恭喜你",
                tip2: "举人二举"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了举人二举");
        }
        else if (jdarr[3] === 1) {
            this.setData({
                tip1: "恭喜你",
                tip2: "秀才一秀"
            })
            this.data.playerlist.push("玩家" + (i + 1) + "获得了秀才一秀");
        }
        else {
            this.setData({
                tip1: "很遗憾",
                tip2: "下次一定"
            })
        }
        this.setData({
            retshow: true,
            buttype: false
        })
    }
})