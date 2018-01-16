import fetch from 'src/util/fetch'
// 购物车基本信息
const fetchCartData = params => fetch('POST', '/cart/get-product-all-by-cart', params)
// 热销商品信息
const fetchHotGoodsData = params => fetch('GET', '/cart/get-hot-goods-info', params)
// 卡卷信息
const fetchCouponList = params => fetch('GET', '/cart/get-coupon-list-info', params)
// 改变商品的选中状态和商品数量
const fetchCheckedAndNum = params => fetch('POST', '/cart/check-product-sku-by-cart', params)
// 删除商品
const fetchCartDel = params => fetch('POST', '/cart/remove-product-by-cart', params)
// 领取卡卷
const fetchReceivedCoupon = params => fetch('POST', '/cart/received-coupon-ajax', params)
// 改变商品规格
const fetchChangeSpec = params => fetch('POST', '/cart/exchange-product-sku-by-cart', params)
// 获取添加购物车是否成功
const fetchAddCart = params => fetch('POST', '/cart/add-product-to-cart', params)
// 获取添加购物车多个
const fetchAddCartMore = params => fetch('POST', '/cart/add-batch', params)
// 拉取购物车基本信息
const fetchCartBasicInfo = params => fetch('GET', '/cart/get-cart-goods-info', params)
export {
  fetchCartData,
  fetchHotGoodsData,
  fetchCouponList,
  fetchCartDel,
  fetchReceivedCoupon,
  fetchChangeSpec,
  fetchAddCart,
  fetchCartBasicInfo,
  fetchAddCartMore,
  fetchCheckedAndNum
}
