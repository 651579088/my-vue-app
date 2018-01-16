const state = {
  cityChoice: {}
}

const getters = {
  // 获取城市选择数据
  cityChoice: state => state.cityChoice
}

const actions = {
  // 设置城市选择数据
  setCityChoice ({commit}, cityChoice) {
    commit('SET_CITY_CHOICE', cityChoice)
  }
}

const mutations = {
  // 设置城市选择数据
  SET_CITY_CHOICE (state, cityChoice) {
    state.cityChoice = cityChoice
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
