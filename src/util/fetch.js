import 'whatwg-fetch'
import { baseUrl, shopId, platForm } from './env'

export default (type = 'GET', url = '', data = {}) => {
  return new Promise((resolve, reject) => { //返回一个promise
    type = type.toUpperCase()
    url = baseUrl + url
    let requestObj = {
      credentials: 'include',
      method: type,
      headers: {
        'callbackurl': window.location.href,
      }
    }

    requestObj.headers['Content-Type'] = 'application/json;charset=UTF-8'

    if (type == 'GET') {
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        if (data[key] === 0 || data[key]) {
          dataStr += key + '=' + data[key] + '&'
        }
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    } else if (type == 'POST') {
      Object.defineProperty(requestObj, 'body', {
        value: JSON.stringify(data)
      })
    } else {
      reject('error type')
    }

    fetch(url, requestObj).then(res => {
      if (res.status === 401) {
        res.json().then(data => {
          window.toast.show({ text: data.message, type: 'text' })
        })
      } else if (res.status === 400) {
        res.json().then(data => {
          window.toast.show({ text: data.message, type: 'text' })
        })
      } else if (res.status === 500) {
        res.json().then(data => {
          window.toast.show({ text: data.message, type: 'text' })
        })
      } else if (res.status === 302) {
        res.json().then(data => {
          window.toast.show({ text: data.message, type: 'text' })
        })
      } else if (res.status === 304) {
        res.json().then(data => {
          window.toast.show({ text: data.message, type: 'text' })
        })
      } else {
        return res.json()
      }
    }).then(data => {
      if (data) {
        if (data.errcode) {
          window.toast.show({ text: data.errmsg, type: 'text' })
          reject(data.errmsg)
        } else {
          resolve(data)
        }
      } else {
        reject('no data')
      }
    }).catch(err => {
      reject(err)
    })
  })
}
