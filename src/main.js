import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'src/router'
import * as filters from 'src/filters'
import FastClick from 'fastclick'
import App from 'src/App'
import 'src/util/rem.js'
import { AlertPlugin, ToastPlugin, WechatPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'
import 'assets/styles/common.css'
import common from 'src/util/common'
import statistical from 'src/util/statistical'

FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  statistical.obtain()
  if (to.meta.title) {
    common.setTitle(to.meta.title)
  }
  next()
})

new Vue({
  router,
  render: f => f(App)
}).$mount('#app')
