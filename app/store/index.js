export const state = () => ({
  busy: false,
  loggedIn: false,
  strategy: 'local',
  user: null,
  authenticated: null
})

export const getters = {
  authenticated (state) {
    return state.auth.loggedIn
  },
  user (state) {
    return state.auth.user
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.auth.user = user
  }
}

export const actions = {
  setUser ({ commit }, user) {
    commit('SET_USER', user)
  },
  clearUser ({ commit }) {
    commit('SET_USER', {})
  }
}
