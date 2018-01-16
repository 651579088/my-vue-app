import fetch from 'src/util/fetch'
// 会员卡首页
const fetchMemberCard = params => fetch('GET', '/member/member-card-ajax', params)
// 会员卡申请
const fetchApplyMember = params => fetch('GET', '/member/get-apply-member-ajax', params)
// 会员成长
const fetchMemberGrowth = params => fetch('GET', '/member/get-member-growth-ajax', params)
// 会员等级
const fetchMemberLevel = params => fetch('GET', '/member/get-member-level-ajax', params)

// 会员卡详情
const fetchMemberCardDetail = params => fetch('POST', '/member/get-member-detail', params)

// 获取验证码
const fetchGetCode = params => fetch('POST', '/member/get-member-code', params)

// 检验验证码
const fetchCheckCode = params => fetch('POST', '/member/check-member-code', params)

// 激活会员
const fetchActivateMember = params => fetch('POST', '/member/activate-member-card', params)

// 同步微信会员卡
const fetchSyncWxCard = params => fetch('POST', '/member/sync-wx-card', params)

// 同步导入会员数据
const fetchSyncImport = params => fetch('POST', '/member/sync-import-data', params)

// 用户基本信息
const fetchBaiscInfo = params => fetch('GET', '/member/get-userinfo-ajax', params)

// 推荐开卡活动信息
const fetchRecommendInfo = params => fetch('GET', '/member-marketing/get-recommend-info', params)

// 被推荐会员信息
const fetchMemberList = params => fetch('GET', '/member-marketing/get-member-list', params)

// 领取奖励
const fetchReceiveReward = params => fetch('POST', '/member-marketing/receive-recommend-reward', params)

// 获取奖励信息
const fetchRewardList = params => fetch('GET', '/member-marketing/get-recommend-reward-list', params)

// 获取签到活动会员折扣商品信息
const fetchGoodsList = params => fetch('GET', '/product/list', params, false, false, false, true)

// 获取签到活动信息
const fetchSignInfo = params => fetch('POST', '/member-marketing/member-sign-in-ajax', params)

// 签到提醒
const fetchRemind = params => fetch('POST', '/member-marketing/member-sign-remind-ajax', params)

// 是否开启签到活动
const fetchSignIsOpen = params => fetch('GET', '/member-marketing/get-sign-activity-info', params)

// 是否签到过
const fetchIsSign = params => fetch('GET', '/member-marketing/get-member-info', params)

// 后台统计pv接口
const fetchSignPv = params => fetch('POST', '/member-marketing/add-sign-pv', params)

// 获取会员卡支付(获取微信授权，调用支付接口)
const getMemberCardPay = params => fetch('POST', '/member/get-member-card-pay', params)

export {
  fetchMemberCard,
  fetchApplyMember,
  fetchMemberCardDetail,
  fetchGetCode,
  fetchCheckCode,
  fetchActivateMember,
  fetchSyncWxCard,
  fetchSyncImport,
  fetchBaiscInfo,
  fetchMemberGrowth,
  fetchMemberLevel,
  fetchRecommendInfo,
  fetchMemberList,
  fetchReceiveReward,
  fetchRewardList,
  fetchGoodsList,
  fetchSignInfo,
  fetchRemind,
  fetchSignIsOpen,
  fetchIsSign,
  fetchSignPv,
  getMemberCardPay
}
