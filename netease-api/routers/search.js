const router = require('koa-router')()
const { 
    fetchHotword, 
    fetchSuggest 
} = require('../api/index')

router.get('/hotword', async (ctx, next) => {
    try {
        const data = await fetchHotword()
        console.log(data)
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

router.get("/suggest", async (ctx, next) => {
    const w = encodeURI(ctx.query.w)
    try{
        const data = await fetchSuggest(w)
        let resData = {
            code: "1",
            msg: "success"
        }
        if (data) {
            resData.data = data
        } else {
            resData.code = "0"
            resData.msg = "fail"
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    } 
})

module.exports = router.routes()