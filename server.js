const Koa = require('koa')
const Next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_DEV !== 'production'
const app = Next({ dev })

const handle = app.getRequestHandler()

// app.prepare().then(() => {
    const server = new Koa()

    const router = new Router()

    router.get('/test/:id', (ctx) => {
        ctx.body = {
            success: true
        }
        ctx.set('Content-Type', 'application/json')
    })

    server.use(async (ctx, next) => {
        // ctx.body = `<span>koa  ${path}   ${method} ${JSON.stringify(ctx)}</span>`
        await next()
    })

    server.use(router.routes())

    // server.use(async (ctx, next) => {
    //     await handle(ctx.req, ctx.res)
    //     ctx.response = false
    // })

    server.listen(3000, () => {
        console.log('koa server listening on 3000')
    })
// })