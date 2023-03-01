Page({
    data: {
        id: '',
        msg: [],
        page: 1
    },
    onLoad(opt) {
        this.setData({
            id: opt
        })
        this.getShopMsg()
    },
    onReachBottom() {
        this.getShopMsg()
    },
    onPullDownRefresh(){
        this.setData({
            page:1,
            msg:[]
        })
        this. getShopMsg()
    },
    onReady() {
        wx.setNavigationBarTitle({
            title: this.data.id.title,
        })
    },
    getShopMsg() {
	//  解构赋值，如果没了这个，下面 _page:page就变成this.data.page
        let {
            page,
            msg
        } = this.data
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.id.id}/shops`,
            data: {
                _page:page,
                _limit: 10
            },
            success: res => {
                const total = res.header['X-Total-Count']
                console.log(res, 'total=' + total);
                if (page * 10 < total || total < 10 && page === 1 && total > 0) {
                    this.setData({
                        msg: [...msg, ...res.data],
                        page: page + 1
                    })
                } else {
                    wx.showToast({
                        title: '暂无更多商铺信息',
                        icon: 'none',
                    })
                }
            }
        })
    },
    gotoDtl(e){
        const dtl =e.currentTarget.dataset.dtl
        wx.navigateTo({
          url: '/pages/detail/detail?dtl='+JSON.stringify(dtl),
        })
    }
})