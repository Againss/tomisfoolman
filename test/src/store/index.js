import Vue from 'vue'
import Vuex from 'vuex'

import * as getter from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'
import state from './state'
import so from './modules/so'

Vue.use(Vuex)

export default new Vuex.store({
  getter,
  state,
  actions,
  mutations,
  modules:{
    so
  }
})
