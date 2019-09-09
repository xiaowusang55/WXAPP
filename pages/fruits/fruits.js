// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fruits: ['apple','orange','peach','grapes','watermelon'],
        counter: 0,
        showFruite: ['APPLE', 'ORANGE', 'PEACH', 'GRAPES', 'WATERMELON'],
        randomColor: ['teal', 'blue', 'brown', 'purple', 'tomato'],
        imgUrls: [
            './img/witcher.jpg',
            './img/cyberpunk0.jpg',
            './img/cyberpunk1.png'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 2000,
        duration: 1000,
        circular: true,
        isShow: false
    },
    tabToggle(e) {
        this.setData({
            counter : e.target.dataset.index
        })
    },
    toRight(e) {
        console.log(e)
    },
    toLeft(e) {
        console.log(e)
    },
    changeIndicatorDots:function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange:function(e) {
        console.log(e)
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
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