import { MutationTree } from 'vuex'
import { MorseChar } from '../services/morse/domain/morseChars'
import { State } from './state'

export enum Mutations {
  addMorseChar = 'addMorseChar',
  addLetter = 'addLetter'
}

export const mutations: MutationTree<State> = {
  [Mutations.addMorseChar](state, char: MorseChar) {
    state.morseChars.push(char)
  },
  [Mutations.addLetter](state, letter: string) {
    state.currentWord += letter
    state.morseChars.splice(0, state.morseChars.length)
  }
}
