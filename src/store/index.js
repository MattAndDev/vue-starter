import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  plugins: [
    createPersistedState({
      key: 'my-app'
    })
  ]
})

export default store
