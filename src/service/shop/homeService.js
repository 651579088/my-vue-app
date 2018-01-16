import fetch from 'src/util/fetch'

// 获取页面
const fetchPageInfo = params => fetch('GET', '/shop/get-page-info', params)

// 获取最近分店ID
const fetchNearestSubShopId = params => fetch('GET', '/shop/get-nearest-sub-shop-id', params)

export {
  fetchPageInfo,
  fetchNearestSubShopId
}
