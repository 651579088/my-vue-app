import fetch from 'src/util/fetch'

// 获取是否显示购物礼包
const fetchCardpack = params => fetch('GET', '/cardpack/user-valid-cardpack-send', params)

// 获取是否显示购物礼包
const checkReceiveCardpack = params => fetch('GET', '/cardpack/check-receive-cardpack', params)

// 领取购物礼包
const receiveCardpack = params => fetch('GET', '/cardpack/receive-card', params, false)

// 购物礼包统计
const cardpackStatic = params => fetch('GET', '../activity/stat-ajax', params, true, true)

export {
  fetchCardpack,
  checkReceiveCardpack,
  receiveCardpack,
  cardpackStatic
}
