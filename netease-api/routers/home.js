const router = require('koa-router')()
const { 
    fetchRecommend,
    fetchTabItem
} = require('../api/index')

router.get('/recommend', async (ctx, next) => {
    try {
        const data = await fetchRecommend()
        let resData = {
            code: "1", 
            msg: "success" 
        }
        if (data) {
            resData.data = data.data
        } else {
            resData.code = "0",
            resData.msg = "fail"
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    }
})

router.get('/tabItem', async (ctx, next) => {
    try {
        const data = await fetchTabItem()
        let resData = {
            code: "1", 
            msg: "success" 
        }
        if (data) {
            resData.data = data.data.cateList
        } else {
            resData.code = "0",
            resData.msg = "fail"
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    }
})

module.exports = router.routes()