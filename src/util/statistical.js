import { fetchGetDefaultShop } from 'src/service/shop/shopService'
import { fetchJsSign } from 'src/service/common/common'
import common from 'src/util/common'

var hostname, shopSubId, address
let obtain = (obj) => {
  hostname = ((window.location.hostname).split('.')).splice(1).join('.') // 获取域名
  shopSubId = common.params('shop_sub_id') || 0
  address = '/' + ((window.location.pathname).split('/')).splice(2).join('/') // 获取地址
  if (address === '/second-kill/goods-list' && obj === undefined) return // 秒杀模板皮肤
  if (address === '/second-kill/goods-list' && obj !== undefined) address = address + '/' + obj // 秒杀模板皮肤
  if (address === '/mall/index' && common.params('sub_id')) address = '/mall/index/sub_id'
  fetchGetDefaultShop({
    shopSubId: common.params('sub_id'),
    distribution_id: common.params('distribution_id')
  }).then(data => {
    window.sessionStorage.shopInfo = JSON.stringify(data)
    if (address !== '/error/expire' && data.contractStatus === 2) {
      window.location.href = '../error/expire'
      return
    }
    var domainMame = 'http://ta.nexto2o.com/js/ta.js'
    if (data.runtime == 'prod' || data.runtime == 'gray') {
      domainMame = 'https://ta.vikduo.com/js/ta.js'
    } else if (data.runtime.match(/(local|dev|beta|test|rc)/i)) {
      domainMame = 'http://betata.snsshop.net/js/ta.js'
    }
    statisticalFun(data.shopId, data.selfPlatform, domainMame)
  })
}

let statisticalFun = (shopId, platformName, domainMame) => {
  var statisticalId = document.getElementById("statisticalId")
  if (statisticalId) document.getElementById("statisticalId").remove()
  var num = platformName == 1 ? 682 : 686
  var parameter = 'param=' + shopId + ',' + shopSubId + ',' + platformName + ',' + hostname + address
  var body = document.getElementsByTagName('body')[0]
  var scriptTag = document.createElement('script')
  scriptTag.setAttribute('type', 'text/javascript')
  scriptTag.setAttribute('id', 'statisticalId')
  scriptTag.src = domainMame + '?id=1&siteid=' + num + '&' + parameter + '&s=' + Math.random()
  body.appendChild(scriptTag)
}
export default {
  obtain // 统计
}