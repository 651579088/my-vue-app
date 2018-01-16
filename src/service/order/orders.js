import fetch from 'src/util/fetch'

// 获取订单列表
const fetchOrderData = params => fetch('GET', '/order/list-ajax', params)

// 取消订单
const fetchCloseOrder = params => fetch('POST', '/order/cancel-ajax', params)

// 获取手机端商品分类样式
const fetchCategoryStyle = params => fetch('GET', '/product/category-style', params)

// 获取手机端商品分类
const fetchCategoryList = params => fetch('GET', '/product/category-list', params)

// 获取订单详情列表
const fetchOrderDetail = params => fetch('GET', '/order/get-order-detail-ajax', params)

// 获取自提点店铺信息
const fetchFindSub = params => fetch('GET', '/order/get-self-pick-up-shop', params)

// 确认收货
const fetchTakeOver = params => fetch('POST', '/order/take-over-ajax', params)

// 获取商品下单信息
const settlementData = (params, url) => fetch('POST', url, params, false)

// 添加订单评论
const addComment = params => fetch('POST', '/order/add-comment-ajax', params)

// 删除订单
const deleteOrder = params => fetch('POST', '/order/order-delete-ajax', params)

// 商品下单(创建订单)
const settlementOrder = (params, url) => fetch('POST', url, params)

// 结算(获取微信授权，调用支付接口)
const settlementPay = params => fetch('POST', '/order/order-pay', params)

// 查询订单支付是否完成
const fetchOrderStatus = params => fetch('POST', '/order/query-pay-status-ajax', params)

export {
  fetchOrderData,
  fetchCloseOrder,
  fetchCategoryStyle,
  fetchCategoryList,
  fetchOrderDetail,
  fetchFindSub,
  fetchTakeOver,
  settlementData,
  addComment,
  deleteOrder,
  settlementOrder,
  settlementPay,
  fetchOrderStatus
}
