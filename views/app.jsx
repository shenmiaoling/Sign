import React from 'react'
// var wx = require('http://res.wx.qq.com/open/js/jweixin-1.0.0.js')
var sign = require('./sign.js');


module.exports = React.createClass({
  componentDidMount() {
        console.log(sign('kgt8ON7yVITDhtdwci0qeQRJGNYgh1B1SIxNqERQhSOia6hTKcJkfun6i78E597-ULVky3zT3jKnlryXrQ7KwQ','https://test-jgbvkrfpnu.now.sh'))
      wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wxc2cd2c6ee316e3fc', // 必填，公众号的唯一标识
      timestamp: "1482111589", // 必填，生成签名的时间戳
      nonceStr: 'gof3qpr60x8ooju', // 必填，生成签名的随机串
      signature: "f28167c9917d0ddce5f4b03bab25cfccf4e48354",// 必填，签名，见附录1
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
      <button onClick={this.handleClick}> 选择图片 </button>
      <button onClick={this.handleUpload}>预览</button>
    </div>
  }
})
