const state = {
  keyboardsValues: '',
  newkeyValues: '',
  showKeyboards: false
}

const getters = {
  showKeyboards: state => state.showKeyboards,
  keyboardsValues: state => state.keyboardsValues,
  newkeyValues: state => state.newkeyValues
}

const actions = {
  // 设置键盘值
  setKeyboardsValues ({commit}, {key, maximum, newvalue, setlength}) {
    commit('SET_KEYBOARDS_VALUES', {key, maximum, newvalue, setlength})
  },
  // 开启键盘
  openKeyboards ({commit}) {
    commit('OPEN_KEYBOARDS')
  },
  // 关闭键盘
  closeKeyboards ({commit}) {
    commit('CLOSE_KEYBOARDS')
  },
  // 重置键盘值
  setValue ({commit}, {value, flag}) {
    commit('SET_VALUE', {value, flag})
  }
}

const mutations = {
  // 设置键盘值
  SET_KEYBOARDS_VALUES (state, {key, newvalue, setlength}) {
    switch (key) {
      case '×':
        if (newvalue) {
          state.newkeyValues = state.newkeyValues.substring(state.newkeyValues.length - 1, 0)
        } else {
          if (state.keyboardsValues) state.keyboardsValues = state.keyboardsValues.substring(state.keyboardsValues.length - 1, 0)
        }
        break
      case '.':
        if (state.keyboardsValues && state.keyboardsValues.indexOf('.') === -1) {
          state.keyboardsValues += '.'
        }
        break
      default:
        if (newvalue) {
          if (state.newkeyValues.toString().length < setlength) state.newkeyValues += key
        } else {
          let values = state.keyboardsValues.split('.')
          let integer = values[0]
          let decimal = values[1]
          if (state.keyboardsValues.indexOf('.') > -1) {
            if (decimal && decimal.length >= 2) return false
          } else {
            if (integer && integer.length >= 8 || /^0/.test(integer)) return false
          }
          state.keyboardsValues += key
        }
        break
    }
  },
  // 开启键盘
  OPEN_KEYBOARDS (state) {
    state.showKeyboards = true
  },
  // 关闭键盘
  CLOSE_KEYBOARDS (state) {
    state.showKeyboards = false
  },
  // 重置键盘值
  SET_VALUE (state, {value, flag}) {
    if (flag) {
      state.keyboardsValues = value
    } else {
      state.newkeyValues = value
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
