Page({
    data:{
        spMsg:{}
    },
    onLoad(opt){
        this.setData({
            spMsg:JSON.parse(opt.dtl)
        })
    },
    xiadan(){
        wx.navigateTo({
          url: '/pages/xiadan/xiadan?link='+this.data.spMsg.link,
        })
    }
})