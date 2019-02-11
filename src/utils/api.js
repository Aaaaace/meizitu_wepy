import wepy from 'wepy'

// api url
var BASE_URL = "https://gank.io/api"
var GET_MEIZI_URL = BASE_URL.concat("/data/福利/10/")
var GET_XIANDU_URL = BASE_URL.concat("/xiandu/data/id/zhihu/count/10/page/")

// 从api获取更多，暂时放在这里
async function loadMore(thePage, url, loadData){
    // console.log("load_more:", url)
    let response = await wepy.request({
        url: url,
        header: {
            "Constant-Type": "application/json",
        }
    }).then((res) => loadData(thePage, res))
    thePage.$apply()
    /*
    wx.request({
        url: url,
        dataType: "json",
        header: { "Constant-Type": "application/json" }
    })
        .then(function (res) {
            // console.log(res)
            if (res == null ||
                res.data == null ||
                res.data.results == null ||
                res.data.results.length <= 0) {
                console.log("cant get data")
                return
            }
            // console.log(res)
            var tempListItems = thePage.data.listItems
            for (var i = 0; i < res.data.results.length; i++) {
                tempListItems.push({
                    id: res.data.results[i]._id,
                    title: res.data.results[i].title,
                    cover: res.data.results[i].cover,
                    site: res.data.results[i].site,
                    url: res.data.results[i].url,
                    published_at: res.data.results[i].published_at,
                    raw: res.data.results[i].raw
                })
            }
            thePage.setData({
                listItems: tempListItems
            })
            wx.hideToast()
        })
        */
}

var api = {
    BASE_URL: BASE_URL,
    GET_MEIZI_URL: GET_MEIZI_URL,
    GET_XIANDU_URL: GET_XIANDU_URL,

    loadMore: loadMore
}
export default api