const state = {
  productSpecData: {},
  choosedSpec: {},
  productNum: 1,
  contSpecShow: false
}

const getters = {
  productSpecData: state => state.productSpecData,
  choosedSpec: state => state.choosedSpec,
  productNum: state => state.productNum,
  contSpecShow: state => state.contSpecShow
}

const actions = {
  // 设置商品规格信息
  setProductSpecData ({commit}, {product, choosedSpec, productNum}) {
    commit('SET_PRODUCT_SPEC_DATA', {product, choosedSpec, productNum})
  },
  // 打开规格容器弹层
  openContSpec ({commit}) {
    commit('OPEN_CONT_SPEC')
  },
  // 关闭规格容器弹层
  closeContSpec ({commit}) {
    commit('CLOSE_CONT_SPEC')
  }
}

const mutations = {
  // 设置商品规格信息值
  SET_PRODUCT_SPEC_DATA (state, {product, choosedSpec, productNum}) {
    state.productSpecData = product
    state.choosedSpec = choosedSpec
    state.productNum = productNum
  },
  // 打开规格容器弹层
  OPEN_CONT_SPEC (state) {
    state.contSpecShow = true
  },
  // 关闭规格容器弹层
  CLOSE_CONT_SPEC (state) {
    state.contSpecShow = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
