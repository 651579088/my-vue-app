import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import * as filters from './filters'
import FastClick from 'fastclick'
import App from './App'
import { AlertPlugin, ToastPlugin, WechatPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'
import './assets/styles/common.css'

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
  // if (!to.name) {
  //   router.push({ path: 'home' })
  // }
  if (to.meta.title) {
    // common.setTitle(to.meta.title)
    document.title = to.meta.title
    let mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
      let iframe = document.createElement('iframe')
      iframe.style.visibility = 'hidden'
      iframe.setAttribute('src', '/static/images/close.png')
      let iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback)
          document.body.removeChild(iframe)
        }, 0)
      }
      iframe.addEventListener('load', iframeCallback)
      document.body.appendChild(iframe)
    }
  }
  next()
})

new Vue({
  router,
  render: f => f(App)
}).$mount('#app')
