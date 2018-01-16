/**
 * Created by XianjieWang on 2017/4/12.
 */
import fetch from '../../util/fetch'
// 活动列表
const fetchActivityList = params => fetch('GET', '/collect-marketing/list', params)

// 活动开始页面
const fetchActivityIndex = params => fetch('GET', '/collect-marketing/index', params, false, false, true)

// 活动获取参与id
const fetchActJoin = params => fetch('GET', '/collect-marketing/create-join-detail', params, false)

// 活动获取游戏详情
const fetchActDetail = params => fetch('GET', '/collect-marketing/activity', params, false, false, true)

// 活动帮助列表
const fetchActHelp = params => fetch('GET', '/collect-marketing/help-list', params)

// 活动发起浇水
const fetchActWatering = params => fetch('GET', '/collect-marketing/create-click-detail', params, false)

// 活动领取宝箱
const fetchGetPrize = params => fetch('GET', '/collect-marketing/receive-chest', params)

// 活动开启宝箱信息
const fetchLotteryInfo = params => fetch('GET', '/marketing-activity/begin-get-prize', params)

// 活动提交实物奖收货信息
const fetchSubmit = params => fetch('POST', '/marketing-activity/update-record-ajax', params)

// 活动我的奖品列表
const fetchGiftList = params => fetch('GET', '/marketing-activity/my-gifts', params, false)

// 活动详情
const fetchGiftListDetail = params => fetch('GET', '/collect-marketing/activity-detail', params, false, false, true)

// 活动宝箱剩余数
const fetchLeftChance = params => fetch('GET', '/marketing-activity/get-left-chance', params, false)

// 活动确认任务完成
const fetchFinish = params => fetch('GET', '/collect-marketing/confirm-finish', params)

// 活动获取微信卡券
const fetchWxCard = params => fetch('GET', '/card-coupon/get-signature', params)

// 活动获得兑奖连接
const fetchQrcodeUrl = params => fetch('GET', '/marketing-activity/get-cancel-qrcode', params)

// 活动获得二维码
const fetchQrcode = params => fetch('GET', '/qrcode/image', params)

// 活动获取微信签名
const fetchWxSignature = params => fetch('GET', '/common/js-sign', params)

// 活动强制关注才能开始游戏
const fetchFocus = params => fetch('GET', '/qrcode/qrcode-detail', params)

// 活动强制填写信息才能开始游戏,信息提交接口
const fetchInfo = params => fetch('POST', '/activity-collection/insert-collection', params)

export {
  fetchActivityIndex,
  fetchActivityList,
  fetchActDetail,
  fetchActJoin,
  fetchActHelp,
  fetchActWatering,
  fetchGetPrize,
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
  fetchFocus,
  fetchInfo
}
