import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// partials
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  plugins: [
    createPersistedState({
      key: 'my-app'
    })
  ]
})

export default store
