const koa = require('koa')
const mount = require('koa-mount')
const views = require('koa-views')
const serve = require('koa-static')
const settings = require('./settings')
const superagent = require('superagent')
const localStorage = require('localStorage')
const server = koa()

superagent.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc2cd2c6ee316e3fc&secret=50aac85d19952d80a1fe230076960292').end((error,response)=>{
  console.log(response.body.access_token)
  if (response.status==200) {
    console.log('localStorage')
  }
})
server.use(mount('/assets', serve('./assets')))
server.use(views('.', settings.template))
server.use(settings.actions.index)

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log('* Use Ctrl-C to stop')
})
