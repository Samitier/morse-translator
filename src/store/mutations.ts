import { MutationTree } from 'vuex'
import { MorseChar } from '../services/morse/domain/morseChars'
import { State } from './state'

export enum Mutations {
  addMorseChar = 'addMorseChar',
  clearMorseChars = 'clearMorseChars'
}

export const mutations: MutationTree<State> = {
  [Mutations.addMorseChar](state, char: MorseChar) {
    state.morseChars.push(char)
  },
  [Mutations.clearMorseChars](state) {
    state.morseChars = []
  }
}
