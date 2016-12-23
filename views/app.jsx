import React from 'react'
import superagent from 'superagent'

let Jssdk = React.createClass({
  componentDidMount() {
    var url = location.href
    console.log(url)
    superagent
    .get(`/api/signature`)
    .query({url:url})
    .end((err,res)=>{
      if(err){
        console.log(err);
        return;
      }
      //成功返回参数,进行注册!
      let data = JSON.parse(res.text)
      console.log(data.appId)
      let jssdkConfig = {
        debug: true,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.signature,
        jsApiList: [
          'scanQRCode',
          'chooseWXPay',
          'checkJsApi',
          'onMenuShareAppMessage'
        ]
      }
    //config接口注入权限验证配置
    window.wx.config(jssdkConfig);

   //jssdk调用成功的返回,回调函数里面就可以调用各个api了
    window.wx.ready(() => {
      alert("jssdk准备就绪");
    });
    })
    //jssdk调用失败的返回
    window.wx.error((res) => {
      alert("jssdk调用失败");
    });
  },

//按照默认配置调用扫码功能,扫码结果由微信自行处理
//这里只是测试,如果扫的是网址它会自行跳转,正常情况下不能这么写,可以结合API处理自己的业务逻辑!
  onScanQRCode() {
    window.wx.scanQRCode();
    },


  render(){
    return (
      <div style={{width: '80%', margin: '0 auto'}}>
        <Button onClick={this.onScanQRCode} style={{marginTop: '10vh'}}>扫一扫</Button>
      </div>
    )
  }
})

export default Jssdkimport React from 'react'
import superagent from 'superagent'
//使用了antd-mobile,我是随便找一个项目做测试练手大家自行忽略antd-mobile!
import {Button} from 'antd-mobile'

let Jssdk = React.createClass({
  componentDidMount() {
    var url = location.href
    console.log(url)
    superagent
    .get(`/api/signature`)
    .query({url:url})
    .end((err,res)=>{
      if(err){
        console.log(err);
        return;
      }
      //成功返回参数,进行注册!
      let data = JSON.parse(res.text)
      console.log(data.appId)
      let jssdkConfig = {
        debug: true,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.signature,
        jsApiList: [
          'scanQRCode',
          'chooseWXPay',
          'checkJsApi',
          'onMenuShareAppMessage'
        ]
      }
    //config接口注入权限验证配置
    window.wx.config(jssdkConfig);

   //jssdk调用成功的返回,回调函数里面就可以调用各个api了
    window.wx.ready(() => {
      alert("jssdk准备就绪");
    });
    })
    //jssdk调用失败的返回
    window.wx.error((res) => {
      alert("jssdk调用失败");
    });
  },

//按照默认配置调用扫码功能,扫码结果由微信自行处理
//这里只是测试,如果扫的是网址它会自行跳转,正常情况下不能这么写,可以结合API处理自己的业务逻辑!
  onScanQRCode() {
    window.wx.scanQRCode();
    },


  render(){
    return (
      <div style={{width: '80%', margin: '0 auto'}}>
        <button onClick={this.onScanQRCode} style={{marginTop: '10vh'}}>扫一扫</button>
      </div>
    )
  }
})

export default Jssdk
