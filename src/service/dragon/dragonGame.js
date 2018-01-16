import fetch from '../../util/fetch'
// 接粽子活动列表
const fetchActivityList = params => fetch('GET', '/activity-zongzi/list-ajax', params)

// 接粽子活动开始页面
const fetchActivityIndex = params => fetch('GET', '/activity-zongzi/activity-zongzi-info-ajax', params, false, false, true)

// 接粽子活动排行榜
const fetchActRank = params => fetch('GET', '/activity-zongzi/rank-list-ajax', params, false)

// 接粽子活动活动校验
const fetchActCheck = params => fetch('GET', '/activity-zongzi/check-activity-ajax', params, false, false, true)

// 接粽子活动奖品
const fetchActPrize = params => fetch('GET', '/activity-zongzi/find-prize-ajax', params, false)

// 接粽子活动活动规则
const fetchActRule = params => fetch('GET', '/activity-zongzi/rule-ajax', params, false, false, true)

// 接粽子活动核算分数
const fetchActScore = params => fetch('POST', '/activity-zongzi/check-score-ajax', params, false, false, true)

// 接粽子活动更改中奖记录状态 仅限微信卡券奖品（微信卡券领取回调）
const fetchActExchange = params => fetch('GET', '/activity-zongzi/update-exchange', params)

// 接粽子活动开始接粽子
const fetchActplaying = params => fetch('GET', '/activity-zongzi/starts-ajax', params, false, false, true)

// 接粽子活动领取宝箱
const fetchGetPrize = params => fetch('GET', '/activity-zongzi/my-gift-ajax', params, false, false, true)

// 51活动开启宝箱信息
const fetchLotteryInfo = params => fetch('GET', '/marketing-activity/begin-get-prize', params)

// 接粽子活动提交实物奖收货信息
const fetchSubmit = params => fetch('POST', '/activity-zongzi/update-record-ajax', params)

// 51活动我的奖品列表
const fetchGiftList = params => fetch('GET', '/marketing-activity/my-gifts', params, false)

// 51活动详情
const fetchGiftListDetail = params => fetch('GET', '/collect-marketing/activity-detail', params, false, false, true)

// 51活动宝箱剩余数
const fetchLeftChance = params => fetch('GET', '/marketing-activity/get-left-chance', params, false)

// 51活动确认任务完成
const fetchFinish = params => fetch('GET', '/collect-marketing/confirm-finish', params)

// 51活动获取微信卡券
const fetchWxCard = params => fetch('GET', '/card-coupon/get-signature', params)

// 51活动获得兑奖连接
const fetchQrcodeUrl = params => fetch('GET', '/marketing-activity/get-cancel-qrcode', params)

// 51活动获得二维码
const fetchQrcode = params => fetch('GET', '/qrcode/image', params)

// 51活动获取微信签名
const fetchWxSignature = params => fetch('GET', '/common/js-sign', params)

// 51活动强制关注才能开始游戏
const fetchFocus = params => fetch('GET', '/qrcode/qrcode-detail', params)

// 接粽子活动强制填写信息才能开始游戏,信息提交接口
const fetchInfo = params => fetch('POST', '/activity-collection/insert-collection', params)

export {
  fetchActivityIndex,
  fetchActivityList,
  fetchActRank,
  fetchActCheck,
  fetchActRule,
  fetchActScore,
  fetchGetPrize,
  fetchActplaying,
  fetchActPrize,
  fetchGiftListDetail,
  fetchFinish,
  fetchGiftList,
  fetchLotteryInfo,
  fetchLeftChance,
  fetchWxCard,
  fetchSubmit,
  fetchQrcode,
  fetchQrcodeUrl,
  fetchWxSignature,
  fetchActExchange,
  fetchFocus,
  fetchInfo
}

