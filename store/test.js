export const state = () => ({
  // そもそもどんなデータを扱うか＆その初期値を決める
text: ''
})

export const getters = {
  txt(state) {
    return state.txt
  }
}

export const mutations = {
  setTxt(state, txt) {
    state.txt = txt
  }
}

export const actions = {
  async saveTxt({ commit }, { text }) {
    // const txt = await this.$axios.post(...) 本来はサーバーへリクエストを書くことが多い
    const txt = await getValueAfter100ms(text)
    commit('setTxt', txt)
  }
}

// 1秒後に値を返すだけの関数、サーバーっぽい挙動にするため。
function getValueAfter100ms(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt)
    }, 100)
  })
}
