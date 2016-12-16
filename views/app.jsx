import React from 'react'
// var wx = require('http://res.wx.qq.com/open/js/jweixin-1.0.0.js')
var sign = require('./sign.js');


module.exports = React.createClass({
  componentDidMount() {
    console.log(sign('kgt8ON7yVITDhtdwci0qeQRJGNYgh1B1SIxNqERQhSNMXLezcZMc5WuIf9n-A7LI4PN0SrkyEgcwV9t_0wTeAQ','https://test-jgbvkrfpnu.now.sh'))
  },
  handleClick(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
    });
        wx.previewImage({
    current: 'https://c.o0bg.com/rf/image_1200w/Boston/2011-2020/2016/07/12/BostonGlobe.com/ReceivedContent/Images/Tlumacki_sunset.jpg', // 当前显示图片的http链接
    // urls: [] // 需要预览的图片http链接列表
    });
    wx.uploadImage({
        localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            var serverId = res.serverId; // 返回图片的服务器端ID
        }
    });
  },
  handleUpload(){
    wx.previewImage({
    current: 'https://c.o0bg.com/rf/image_1200w/Boston/2011-2020/2016/07/12/BostonGlobe.com/ReceivedContent/Images/Tlumacki_sunset.jpg', // 当前显示图片的http链接
    // urls: [] // 需要预览的图片http链接列表
    });
    wx.uploadImage({
        localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            var serverId = res.serverId; // 返回图片的服务器端ID
        }
    });
  },
  render() {
    return <div className="pages-404">
      <h4>主页</h4>
      <button onClick={this.handleUpload}> 选择图片 </button>
      <button onClick={this.handleUpload}>预览</button>
    </div>
  }
})
