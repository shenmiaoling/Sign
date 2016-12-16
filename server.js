const koa = require('koa')
const mount = require('koa-mount')
const views = require('koa-views')
const serve = require('koa-static')
const settings = require('./settings')

const server = koa()

server.use(mount('/assets', serve('./assets')))
server.use(views('.', settings.template))
server.use(settings.actions.index)

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log('* Use Ctrl-C to stop')
})
