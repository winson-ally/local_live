Page({
    data: {
        swpLis: [],
        shopLis:[]
    },
    onLoad() {
        this.getData()
        this.getShopLis()
    },
    getData() {
        wx.request({
            url: 'https://www.escook.cn/slides',
            method: 'GET',
            success: (res) => {
                this.setData({
                    swpLis: res.data
                })
            }
        })
    },
    getShopLis() {
        wx.request({
            url: 'https://www.escook.cn/categories',
            success: res => {
                this.setData({
                    shopLis:res.data
                })
            }
        })
    }
})