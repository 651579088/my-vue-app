import { cardpackStatic } from 'src/service/activity/cardpack'
let params = string => {
  let reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r) return decodeURI(r[2])
  return false
}

let setTitle = title => {
  document.title = title
  let mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    iframe.setAttribute('src', '/static/images/close.png')
    let iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

let add = (arg1, arg2) => {
  let r1
  let r2
  let m
  let c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}

let sub = (arg1, arg2) => {
  let r1
  let r2
  let m
  let n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}

let mul = (arg1, arg2) => {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

let div = (arg1, arg2) => {
  let t1 = 0
  let t2 = 0
  let r1
  let r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

let integer = (arg) => {
   let i1 = parseFloat(arg)
   if (i1 < 0) i1 = 0
  return i1
}

// 微信配置项
let wxConfig = (wx, jsSign) => {
  wx.config({
    debug: Boolean(jsSign.debug), // 调试开关
    appId: jsSign.appid,
    timestamp: jsSign.timestamp,
    nonceStr: jsSign.nonceStr || jsSign.noncestr,
    signature: jsSign.signature,
    jsApiList: jsSign.jsApiList || [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'startRecord',
      'stopRecord',
      'onVoiceRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'onVoicePlayEnd',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'translateVoice',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ]
  })

  wx.ready(() => {
    WeixinJSBridge.call('hideOptionMenu')
  })
}

let wxShare = (wx, shareObj) => {
  //成功回调函数
  let successCallback = () => {
    if (shareObj.success && shareObj.success.id && shareObj.success.activity_type) { // success是对象
      cardpackStatic({
        id: shareObj.success.id,
        activity_type: shareObj.success.activity_type,
        stat_type: 'share'
      }).then((res) => {console.log(res)})
    } else if (shareObj.success && typeof shareObj.success === 'function') { // success是函数
      shareObj.success.call(this, shareObj)
    }
    if (typeof shareObj.successCallback === 'function') { // 有自定义successCallback
      shareObj.successCallback.call(this, shareObj)
    }
  }
  let shareData = {
    imgUrl: shareObj.imgUrl,
    link: shareObj.link,
    desc: shareObj.desc,
    title: shareObj.title,
    success: successCallback
  }
  wx.ready(() => {
    WeixinJSBridge.call('showOptionMenu')
    wx.onMenuShareTimeline(shareData)
    wx.onMenuShareAppMessage(shareData)
    wx.onMenuShareQQ(shareData)
    wx.onMenuShareWeibo(shareData)
    wx.onMenuShareQZone(shareData)
  })
}

let addCard = (wx, options) => {
  let obj = {
    code: '',
    openid: '',
    nonce_str: options.noncestr.toString(),
    timestamp: options.timestamp.toString(),
    signature: options.signature.toString()
  }
  let jsonStr = JSON.stringify(obj)
  wx.ready(() => {
    wx.addCard({
      cardList: [{
        cardId: options.card_id,
        cardExt: jsonStr
      }],
      success: (res) => {
        if (typeof options.success === 'function') {
          options.success.call(this, res)
        }
      },
      fail: (res) => {
        if (typeof options.fail === 'function') {
          options.fail.call(this, res)
        }
      }
    })
  })
}

let chooseWXPay = (wx, data, callback, cancelBack) => {
  wx.ready(() => {
    wx.chooseWXPay({
      appId: data.appid,
      timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
      package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: data.signature, // 支付签名
      success (res) { // 支付成功后的回调函数
        typeof callback === 'function' && callback.call(this, res)
      },
      cancel (res) {
        typeof cancelBack === 'function' && cancelBack.call(this, res)
      }
    })
  })
}

let imgProcess = (url, width, height) => {
  if(!url.match(/static\/images\/customPage/)){
    let temp = url.split(/.(jpg|png|gif)/ig)
    return temp[0] + '_' + width + '_' + height + '.' + temp[1]
  } else {
    return url
  }
}

let checkPhone = (data) => {
  return /^(1[3|4|5|7|8][\d]{9}|0[\d]{2,3}-[\d]{7,8})$/.test(data)
}

// 倒计时
let countDown = (distance ,day, hour, minute, second) => {
  day = Math.floor((distance / 3600) / 24)
  hour = Math.floor((distance / 3600) % 24)
  minute = Math.floor((distance / 60) % 60)
  second = Math.floor(distance % 60)
  if (day < 10) day = '0' + day
  if (hour < 10) hour = '0' + hour
  if (minute < 10) minute = '0' + minute
  if (second < 10) second = '0' + second
  return {day: day, hour: hour, minute: minute, second: second}
}
export default {
  add, // 加
  sub, // 减
  mul, // 乘
  div, // 除
  params, // 获取地址栏参数值
  integer, //
  setTitle, // 设置页面标题
  wxConfig, // 微信配置项
  wxShare, // 分享
  chooseWXPay, // 微信支付
  imgProcess, // 图片地址处理
  addCard, // 添加卡劵
  checkPhone, // 电话号码校验
  countDown // 倒计时
}
