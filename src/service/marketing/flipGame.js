import fetch from 'src/util/fetch'

// 翻翻看活动列表
const fetchActivityList = params => fetch('POST', '/memory-fan/list-ajax', params)

// 翻翻看排行榜
const fetchRankList = params => fetch('POST', '/memory-fan/rank-list-ajax', params)

// 获取活动详情
const fetchActDetail = params => fetch('POST', '/memory-fan/detail-ajax', params)

// 获取活动详情 有奖品的活动 仅供测试用
const fetchActDetail2 = params => fetch('POST', '/memory-fan/detail-ajax', params)

// 翻翻看设置的奖品
const fetchPrizeSet = params => fetch('POST', '/market-activity/find-prize-ajax', params)

// 翻翻看我的奖品列表
const fetchGiftList = params => fetch('POST', '/memory-fan/gift-list-ajax', params)

// 翻翻看开启宝箱信息
const fetchLotteryInfo = params => fetch('POST', '/memory-fan/open-chest-ajax', params)

// 翻翻看宝箱剩余数
const fetchLeftChance = params => fetch('POST', '/market-activity/get-left-chance', params)

// 翻翻看获取微信卡券
const fetchWxCard = params => fetch('POST', '/card-coupons/get-signature', params)

// 翻翻看提交实物奖收货信息
const fetchSubmit = params => fetch('POST', '/market-activity/update-record-ajax', params)

// 翻翻看二维码
const fetchQrcode = params => fetch('POST', '/market-activity/qrcode-url-ajax', params)

export {
  fetchActivityList,
  fetchRankList,
  fetchActDetail,
  fetchActDetail2,
  fetchPrizeSet,
  fetchGiftList,
  fetchLotteryInfo,
  fetchLeftChance,
  fetchWxCard,
  fetchSubmit,
  fetchQrcode
}
