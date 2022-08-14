const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')
const router = require("koa-router")()
const mainRouter = require('./routers/home')
const searchRouter = require('./routers/search')
const sortRouter = require('./routers/sort')

app.use(cors())
router.use('/home', mainRouter)
router.use('/search', searchRouter)
router.use('/sort', sortRouter)
app.use(router.routes())

app.use((ctx) => {
    ctx.body = 'hello world'
})

app.listen(3300, () => {
    console.log('Your app is running');
})