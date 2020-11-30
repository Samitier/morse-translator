import { ActionTree } from 'vuex'
import { MorseChar } from '../services/morse/domain/morseChars'
import { Mutations } from './mutations'
import { State } from './state'

export enum Actions {
  addMorseChar = 'addMorseChar'
}

export const actions: ActionTree<State, State> = {
  [Actions.addMorseChar]({ commit }, char: MorseChar) {
    commit(Mutations.addMorseChar, char)
  }
}
