import fetch from 'src/util/fetch'

// 获取节日礼包信息
const fetchGiftpackData = params => fetch('GET', '/giftpack/show-gift', params)

// 节日礼包统计接口
const statics = params => fetch('GET', '../giftpack/stat-ajax', params, true, true)

// 领取节日礼包接口
const getGift = params => fetch('POST', '/giftpack/receive-gift', params)

export {
  fetchGiftpackData,
  statics,
  getGift
}
