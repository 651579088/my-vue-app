import fetch from 'src/util/fetch'
// 余额支付接口
// 判断是否支持余额支付
const fetchConfirmStorePay = params => fetch('GET', '/pay/is-stored-pay-ajax', params, false)

// 余额支付接口
const fetchStorePay = params => fetch('POST', '/pay/order-stored-pay-ajax', params, false)

// 获取验证码
const fetchSendCode = params => fetch('GET', '/pay/get-store-code', params)

// 验证验证码
const fetchCheckCode = params => fetch('GET', '/pay/check-store-code', params)

// 余额支付密码设置
const fetchSetPassword = params => fetch('POST', '/pay/set-stored-password', params)

export {
  fetchConfirmStorePay,
  fetchStorePay,
  fetchSendCode,
  fetchCheckCode,
  fetchSetPassword
}
