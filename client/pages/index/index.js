//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var http = require('../../utils/httpHelper.js')

Page({
    data: {
        key: '91876885074bd74f9126dd7c84c04cef',
        page1: 1,
        page2: 1,
        pagesize: 20,
        sort: '',
        time: null,
        currentTab: 0, 
        winWidth: 0,
        winHeight: 0,
        flag: true  
    },
    bindChange: function (e) {
      var t = this;
      t.setData({ currentTab: e.detail.current });
    },
    swichNav: function (e) {
      var t = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        t.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    /** 获取最新笑话 **/
    // loadMore: function(){
    //   console.log(111)
    //   var t = this;
    //   if (t.data.currentTab==0){
    //     t.data.page1 = t.data.page1 + 1;
    //     if (t.data.flag) {
    //       t.data.flag = false;
    //       http.get('https://japi.juhe.cn/joke/content/text.from', { key: t.data.key, page: t.data.page1, pagesize: t.data.pagesize }, function (resp) {
    //         console.log(resp)
    //         if (resp.error_code == 0) {
    //           t.data.textData = t.data.textData.concat(resp.result.data)
    //           t.setData({
    //             textData: t.data.textData
    //           })
    //         } else {
    //           t.setData({
    //             error_code: resp.error_code,
    //             msg: resp.reason,
    //           })
    //         }
    //         t.data.flag = true;
    //       })
    //     }
    //   }else {
    //     t.data.page2 = t.data.page2 + 1;
    //     if (t.data.flag) {
    //       t.data.flag = false;
    //       console.log(t.data.page2)
    //       http.get('https://japi.juhe.cn/joke/img/text.from', { key: t.data.key, page: t.data.page2, pagesize: t.data.pagesize }, function (resp) {
    //         console.log(resp)
    //         if (resp.error_code == 0) {
    //           t.data.imgData = t.data.imgData.concat(resp.result.data);
    //           t.setData({
    //             imgData: t.data.imgData
    //           })
    //         } else {
    //           t.setData({
    //             error_code: resp.error_code,
    //             msg: resp.reason,
    //           })
    //         }
    //         t.data.flag = true;
    //       })
    //     }
    //   }
    // },
    /** 获取随机笑话 **/
    // loadMore: function () {
    //   console.log(111)
    //   var t = this;
    //   if (t.data.currentTab == 0) {
    //     if (t.data.flag) {
    //       t.data.flag = false;
    //       http.get('https://v.juhe.cn/joke/randJoke.php', { key: t.data.key}, function (resp) {
    //         console.log(resp)
    //         if (resp.error_code == 0) {
    //           t.data.textData = t.data.textData.concat(resp.result)
    //           t.setData({
    //             textData: t.data.textData
    //           })
    //         } else {
    //           t.setData({
    //             error_code: resp.error_code,
    //             msg: resp.reason,
    //           })
    //         }
    //         t.data.flag = true;
    //       })
    //     }
    //   } else {
    //     if (t.data.flag) {
    //       t.data.flag = false;
    //       http.get('https://v.juhe.cn/joke/randJoke.php', { key: t.data.key, type: 'pic' }, function (resp) {
    //         console.log(resp)
    //         if (resp.error_code == 0) {
    //           t.data.imgData = t.data.imgData.concat(resp.result);
    //           t.setData({
    //             imgData: t.data.imgData
    //           })
    //         } else {
    //           t.setData({
    //             error_code: resp.error_code,
    //             msg: resp.reason,
    //           })
    //         }
    //         t.data.flag = true;
    //       })
    //     }
    //   }
    // },

    onShareAppMessage: function () {
      return {
        title: '好笑笑话',
        path: '/pages/index/index',
        success: function (res) {
          
        },
        fail: function (res) {
          // 转发失败
        }
      }
    },
    imageTab: function (e) {
      var urls = [e.currentTarget.dataset.src];
      wx.previewImage({
        urls: urls
      });
    },
    
    onLoad() {
      var t = this;
      wx.getSystemInfo({

        success: function (res) {
          t.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
          });
        }

      });  
      /** 获取最新笑话 **/
      // http.get('https://japi.juhe.cn/joke/content/text.from', { key: t.data.key, page: t.data.page1, pagesize: t.data.pagesize},function(resp){
      //   console.log(resp)
      //   if (resp.error_code == 0) {
      //     t.setData({
      //       textData: resp.result.data
      //     })
      //   } else {
      //     t.setData({
      //       error_code: resp.error_code,
      //       msg: resp.reason,
      //     })
      //   }
      // })
      // http.get('https://japi.juhe.cn/joke/img/text.from', { key: t.data.key, page: t.data.page2, pagesize: t.data.pagesize }, function (resp) {
      //   console.log(resp)
      //   if (resp.error_code == 0) {
      //     t.setData({
      //       imgData: resp.result.data
      //     })
      //   } else {
      //     t.setData({
      //       error_code: resp.error_code,
      //       msg: resp.reason,
      //     })
      //   }
      //   t.data.flag = true;
      // })

      /** 获取随机笑话 **/
      // http.get('https://v.juhe.cn/joke/randJoke.php', { key: t.data.key }, function (resp) {
      //   console.log(resp)
      //   if (resp.error_code == 0) {
      //     t.setData({
      //       textData: resp.result
      //     })
      //   } else {
      //     t.setData({
      //       error_code: resp.error_code,
      //       msg: resp.reason,
      //     })
      //   }
      // })
      // http.get('https://v.juhe.cn/joke/randJoke.php', { key: t.data.key, type:'pic' }, function (resp) {
      //   console.log(resp)
      //   if (resp.error_code == 0) {
      //     t.setData({
      //       imgData: resp.result
      //     })
      //   } else {
      //     t.setData({
      //       error_code: resp.error_code,
      //       msg: resp.reason,
      //     })
      //   }
      // })
    }
})