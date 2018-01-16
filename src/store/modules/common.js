const state = {
  dialog: {
    showDialog: 'none', // 弹层显示
    dialogText: '' // 弹层内容
  },
  footerMenuIndex: 1, // 底部菜单选择高亮
  showAttention: false // 公众号关注
}

const getters = {
  // 获取提示框文本
  getDialogText: state => state.dialog,
  // 获取底部菜单index
  getFooterMenuIndex: state => state.footerMenuIndex,
  // 关注公众号弹层显示
  getAttentionModal: state => state.showAttention
}

const actions = {
  // 设置提示框文本
  setDialogText ({commit}, text) {
    commit('SET_DIALOG_TEXT', text, 'block')
    window.setTimeout(() => {
      commit('SET_DIALOG_TEXT', '', 'none')
    }, 2000)
  },
  // 切换底部菜单高亮
  setFooterMenuIndex ({commit}, index) {
    commit('SET_FOOTER_MENU_INDEX', index)
  },
  // 关注公众号弹层显示
  setAttentionModal ({commit}, isShow) {
    commit('SET_ATTENTION_MODAL', isShow)
  }
}

const mutations = {
  // 设置提示框文本
  SET_DIALOG_TEXT (state, text, css) {
    state.dialog = {
      showDialog: css,
      dialogText: text
    }
  },
  // 切换底部菜单高亮
  SET_FOOTER_MENU_INDEX (state, index) {
    state.footerMenuIndex = index
  },
  // 关注公众号弹层显示
  SET_ATTENTION_MODAL (state, isShow) {
    state.showAttention = isShow
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
