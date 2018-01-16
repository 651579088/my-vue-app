import fetch from 'src/util/fetch'

// 获取商品详情信息
const fetchProductBasicInfo = params => fetch('GET', '/product/get-basic-info', params)

// 获取商品详情评价信息
const fetchProductCommentInfo = params => fetch('GET', '/product/get-comments', params)

// 获取商品列表信息
const fetchProductListInfo = (params, url) => fetch('GET', url, params)

// 获取商品满减信息
const fetchReductionInfo = params => fetch('GET', '/product/find-product-reduction', params)

// 获取商品sku信息
const fetchProductSkuInfo = params => fetch('GET', '/product/get-sku-info', params)

// 获取各分店商品列表信息
const fetchShopSubByProductInfo = params => fetch('GET', '/product/get-shop-sub-by-product-id', params)

export {
  fetchProductBasicInfo,
  fetchProductCommentInfo,
  fetchProductListInfo,
  fetchReductionInfo,
  fetchProductSkuInfo,
  fetchShopSubByProductInfo
}
