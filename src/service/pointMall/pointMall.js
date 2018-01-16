import fetch from 'src/util/fetch'
// 获取商品列表
const fetchGoodsLists = params => fetch('GET', '/point-mall/find-goods', params)

// 获取商品详情
const fetchGoodDetail = params => fetch('GET', '/point-mall/get-goods', params)

// 获取积分兑换列表
const fetchExchange = params => fetch('GET', '/point-mall/find-exchange-log', params)

// 获取商家配置
const fetchShopSetting = params => fetch('GET', '/shop-setting/get-shop-setting', params)

// 获取商品评价
const fetchEstimateList = params => fetch('GET', '/product/get-comments', params, false, false, true)

export {
  fetchGoodsLists,
  fetchGoodDetail,
  fetchExchange,
  fetchShopSetting,
  fetchEstimateList
}
