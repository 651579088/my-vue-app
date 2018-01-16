import fetch from 'src/util/fetch'

// 获取底部菜单信息
const fetchMenuInfo = params => fetch('GET', '/common/bottom-navigation', params)

export { fetchMenuInfo }
