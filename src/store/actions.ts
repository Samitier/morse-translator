import { ActionTree } from 'vuex'
import { MorseChar } from '../services/morse/domain/morseChars'
import { Mutations } from './mutations'
import { State } from './state'

export enum Actions {
  addMorseChar = 'addMorseChar',
  autocompleteLetter = 'autocompleteLetter'
}

export const actions: ActionTree<State, State> = {
  [Actions.addMorseChar]({ commit, getters, dispatch }, char: MorseChar) {
    commit(Mutations.addMorseChar, char)
    if (getters.filteredLetters.length === 1) {
      dispatch(Actions.autocompleteLetter)
    }
  },
  [Actions.autocompleteLetter]({ commit, getters }) {
    const letter = getters.filteredLetters[0]
    commit(Mutations.addLetter, letter)
  }
}
