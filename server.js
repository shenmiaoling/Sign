const koa = require('koa')
const mount = require('koa-mount')
const views = require('koa-views')
const serve = require('koa-static')
const settings = require('./settings')
const superagent = require('superagent')
const server = koa()
const router = require('koa-router')
//引入配置和方法
var signature = require('./signature');
var wechat_cfg = require('./config/wechat.cfg');

//增加一条api供客户端使用
router.get("/", function(req,res) {
  const url = req.query.url.split('#')[0];
  signature.sign(url,function(signatureMap){
    //因为config接口需要appid,多加一个参数传入appid
    signatureMap.appId = wechat_cfg.appid;
    //发送给客户端
    res.send(signatureMap);
  });
})
server.use(mount('/assets', serve('./assets')))
server.use(views('.', settings.template))
server.use(settings.actions.index)

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log('* Use Ctrl-C to stop')
})
