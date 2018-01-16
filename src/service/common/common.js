import fetch from 'src/util/fetch'

// 获取省市区信息
const getBasicAreaInfo = params => fetch('GET', '/common/basic-area-info', params)

// 获取微信签名
const fetchJsSign = params => fetch('GET', '/common/js-sign', params)

// 获取二维码图片
const fetchCreateCode = params => fetch('GET', '/common/create-code', params)

// 图片上传
const fetchUploadFile = params => fetch('POST', '/document/wx-upload-file', params)

// 获取物流列表
const fetchLogisticsList = params => fetch('GET', '/common/logistics-list', params)

// 获取店铺设置新;
const fetchShopSetting = params => fetch('GET', '/shop-setting/get-shop-setting', params)

export {
  getBasicAreaInfo,
  fetchJsSign,
  fetchCreateCode,
  fetchUploadFile,
  fetchLogisticsList,
  fetchShopSetting
}
