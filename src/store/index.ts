import { createStore } from 'vuex'
import { state, State } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export default createStore<State>({
  state() {
    return state
  },
  mutations,
  actions,
  getters
})
