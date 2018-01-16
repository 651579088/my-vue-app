import fetch from 'src/util/fetch'

// 获取拼团商品列表（包括当前拼团，即将开启，往期拼团）
const fetchTogetherBuyList = params => fetch('GET', '/together-buy/list', params)

// 获取我的拼团列表
const fetchMyGroupList = params => fetch('GET', '/together-buy/mine-list', params)

// 获取我的拼团详情信息
const fetchGroupDetail = params => fetch('GET', '/together-buy/queue-detail', params, false, false, true)

// 获取拼团详情参与用户信息
const fetchJoinUserList = params => fetch('GET', '/together-buy/find-join-queue-user-list', params)

// 获取拼团商品详情
const fetchGoodsDetail = params => fetch('GET', '/together-buy/detail', params, false, false, true)

// 获取我的拼团详情信息
const fetchRelatedGroupList = params => fetch('GET', '/together-buy/relate-queue-list', params)

// 获取参团商品详情
const fetchJoinDetail = params => fetch('GET', '/together-buy/join-detail', params, false, false, true)

// 获取参团商品详情
const fetchBarrageList = params => fetch('GET', '/together-buy/join-list-by-product', params)

// 获取关注二维码
const fetchAccountInfo = params => fetch('GET', '/qrcode/qrcode-detail', params)

export {
  fetchTogetherBuyList,
  fetchMyGroupList,
  fetchGroupDetail,
  fetchJoinUserList,
  fetchGoodsDetail,
  fetchRelatedGroupList,
  fetchJoinDetail,
  fetchBarrageList,
  fetchAccountInfo
}