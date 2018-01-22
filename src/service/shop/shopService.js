import fetch from 'src/util/fetch'

// 获取默认门店信息
const fetchGetDefaultShop = params => fetch('GET', '/shop/get-current-shop', params)

export {
  fetchGetDefaultShop
}
