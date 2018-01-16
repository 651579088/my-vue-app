import fetch from 'src/util/fetch'

// 获取用户地址列表
const fetchAddressList = params => fetch('GET', '/user/address-list', params)

// 获取用户地址 编辑用
const fetchAddressData = params => fetch('GET', '/user/get-address', params)

// 提交编辑的地址
const postAddressEditData = params => fetch('POST', '/user/address-edit', params)

// 删除地址
const delAddress = params => fetch('POST', '/user/address-del', params)

// 新增地址
const addAddress = params => fetch('POST', '/user/address-add', params, true, false, true)

// 设置默认地址
const setDefaultAddress = params => fetch('POST', '/user/default-address', params)

// 选择邮寄地址
const chooseAddress = params => fetch('POST', '/order/choose-address', params)

// 获取微信地址
const wxAddress = params => fetch('GET', '/order/wx-address', params, false)

export {
  fetchAddressList,
  fetchAddressData,
  postAddressEditData,
  delAddress,
  addAddress,
  setDefaultAddress,
  chooseAddress,
  wxAddress
}
