import fetch from 'src/util/fetch'

// 购物礼包统计
const cardpackStatic = params => fetch('GET', '../activity/stat-ajax', params, true, true)

export {
  cardpackStatic
}
