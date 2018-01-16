import fetch from 'src/util/fetch'
// 520兑换积分
const fetchActExchange = params => fetch('GET', '/marketing-activity/exchange-chance-with-point', params)

// 520用户收集活动填写接口
const fetchActUserCollection = params => fetch('POST', '/activity-collection/insert-collection', params)

// 520获取中奖记录
const fetchWinnerRecord = params => fetch('GET', '/marketing-activity/winner-record-list', params)

// 520获取活动信息接口
const fetchActJoinActivity = params => fetch('GET', '/marketing-activity/join-activity', params, false, false, true)

// 520强制关注二维码
const fetchActQrcode = params => fetch('GET', '/qrcode/qrcode-detail', params)

// 520剩余抽奖机会查询
const fetchActLeftChange = params => fetch('GET', '/marketing-activity/get-left-chancel', params, false, false, true)

// 520查询奖品设置
const fetchActPrizes = params => fetch('GET', 'marketing-activity/get-prizes-by-activity', params)

// 520查询中奖奖品
const fetchActGetPrize = params => fetch('GET', '/marketing-activity/begin-get-prize', params, false, false, true)

// 520获取二维码图片地址
const fetchActCancelQrcode = params => fetch('GET', '/marketing-activity/get-cancel-qrcode', params)

// 520领取微信卡券
const fetchActSignature = params => fetch('GET', '/card-coupon/get-signature', params)

// 520中奖信息填写
const fetchActUpdateRecord = params => fetch('POST', '/marketing-activity/update-record-ajax', params)

// 520活动列表
const fetchActList = params => fetch('GET', '/marketing-activity/activity-list', params)

export {
  fetchActUserCollection,
  fetchActExchange,
  fetchActJoinActivity,
  fetchWinnerRecord,
  fetchActQrcode,
  fetchActLeftChange,
  fetchActPrizes,
  fetchActUpdateRecord,
  fetchActSignature,
  fetchActGetPrize,
  fetchActList,
  fetchActCancelQrcode
}
