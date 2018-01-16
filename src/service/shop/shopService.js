import fetch from 'src/util/fetch'
// 获取门店列表
const fetchGetShopList = params => fetch('GET', '/shop/get-shop-list', params)

// 获取默认门店信息
const fetchGetDefaultShop = params => fetch('GET', '/shop/get-current-shop', params)

export {
  fetchGetShopList,
  fetchGetDefaultShop
}
