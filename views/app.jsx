import React from 'react'
import superagent from 'superagent'
var sign = require('./sign.js');


module.exports = React.createClass({
  getInitialState() {
    return {
      access_token:''
    }
  },
  componentDidMount() {
    // superagent.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc2cd2c6ee316e3fc&secret=50aac85d19952d80a1fe230076960292').end((error,response)=>{
    //   this.setState({
    //     access_token: response.access_token
    //   },()=>{console.log('message')})
    // })
      let s = sign('kgt8ON7yVITDhtdwci0qeQRJGNYgh1B1SIxNqERQhSPIIcSda3G65DehtRw3KCVkoiM2sPM5k3KJEVHnVAr9cQ','https://test-jgbvkrfpnu.now.sh')
      wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wxc2cd2c6ee316e3fc', // 必填，公众号的唯一标识
      timestamp: s.timestamp, // 必填，生成签名的时间戳
      nonceStr: s.nonceStr, // 必填，生成签名的随机串
      signature: s.signature,// 必填，签名，见附录1
      jsApiList: ['chooseImage','previewImage','uploadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
  },
  handleClick(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      // console.log('message');
      success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片

        }

    });
    //     wx.previewImage({
    // current: 'https://c.o0bg.com/rf/image_1200w/Boston/2011-2020/2016/07/12/BostonGlobe.com/ReceivedContent/Images/Tlumacki_sunset.jpg', // 当前显示图片的http链接
    // // urls: [] // 需要预览的图片http链接列表
    // });
    // wx.uploadImage({
    //     localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
    //     isShowProgressTips: 1, // 默认为1，显示进度提示
    //     success: function (res) {
    //         var serverId = res.serverId; // 返回图片的服务器端ID
    //     }
    // });
  },
  handleUpload(){
    wx.previewImage({
    current: 'https://c.o0bg.com/rf/image_1200w/Boston/2011-2020/2016/07/12/BostonGlobe.com/ReceivedContent/Images/Tlumacki_sunset.jpg', // 当前显示图片的http链接
    // urls: [] // 需要预览的图片http链接列表
    });
  },
  render() {
    return <div className="pages-404">
      <h4>主页</h4>
      <button onClick={this.handleClick}>选择图片</button>
      <button onClick={this.handleUpload}>预览</button>
    </div>
  }
})
