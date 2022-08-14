const router = require('koa-router')()
const { fetchSortGoodsById } = require('../api/index')

router.get('/:rId', async (ctx, next) => {
    const { rId } = ctx.params || '11'
    try {
        const data = await fetchSortGoodsById(rId)
        ctx.body = data
    } catch (err) {
        next(err)
    }
})

module.exports = router.routes()