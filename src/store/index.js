import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import numKeyboards from './modules/numKeyboards'
import productSpec from './modules/productSpec'
import promotionPop from './modules/promotionPop'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,
    numKeyboards,
    productSpec, // 商品规格组件
    promotionPop, // 促销弹层组件
    home
  },
  strict: debug
})
