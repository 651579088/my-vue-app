import fetch from '../../util/fetch'
// 秒杀活动商品列表
const fetchProductList = params => fetch('GET', '/second-kill/find-goods', params, false, false, true)

// 秒杀活动评价列表
const fetchEstimateList = params => fetch('GET', '/product/get-comments', params, false, false, true)

// 秒杀活动秒杀提醒
const fetchRemind = params => fetch('GET', '/second-kill/remind-me', params, false, false, true)

// 秒杀活动取消秒杀提醒
const fetchCancelRemind = params => fetch('GET', '/second-kill/cancel-remind-me', params, false, false, true)

// 秒杀活动秒杀商品详情
const fetchGoodsDetail = params => fetch('GET', '/second-kill/get-goods', params, false, false, true)

// 秒杀活动获取店铺信息
const fetchShopDetail = params => fetch('GET', '/shop/get-shop', params, false, false, true)

// 接粽子活动开始页面
const fetchActivityIndex = params => fetch('GET', '/activity-zongzi/activity-zongzi-info-ajax', params, false, false, true)

export {
  fetchProductList,
  fetchActivityIndex,
  fetchEstimateList,
  fetchRemind,
  fetchCancelRemind,
  fetchGoodsDetail,
  fetchShopDetail
}