const state = {
  contPromotionShow: false,
  promotionShow: false
}

const getters = {
  contPromotionShow: state => state.contPromotionShow,
  promotionShow: state => state.promotionShow
}

const actions = {
  // 打开促销容器弹层
  openContPromotion ({commit}) {
    commit('OPEN_CONT_PROMOTION')
  },
  // 关闭促销容器弹层
  closeContPromotion ({commit}) {
    commit('CLOSE_CONT_PROMOTION')
  },
  // 打开促销弹层
  openPromotion ({commit}) {
    commit('OPEN_PROMOTION')
  },
  // 关闭促销弹层
  closePromotion ({commit}) {
    commit('CLOSE_PROMOTION')
  }
}

const mutations = {
  // 打开促销容器弹层
  OPEN_CONT_PROMOTION (state) {
    state.contPromotionShow = true
  },
  // 关闭促销容器弹层
  CLOSE_CONT_PROMOTION (state) {
    state.contPromotionShow = false
  },
  // 打开促销弹层
  OPEN_PROMOTION (state) {
    state.promotionShow = true
  },
  // 关闭促销弹层
  CLOSE_PROMOTION (state) {
    state.promotionShow = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
