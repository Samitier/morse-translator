import { ActionTree } from 'vuex'
import { guessWord } from '../services/guessWord/guessWord'
import { MorseChar } from '../services/morse/domain/morseChars'
import { Mutations } from './mutations'
import { State } from './state'

export enum Actions {
  addMorseChar = 'addMorseChar',
  autocompleteLetter = 'autocompleteLetter',
  guessWord = 'guessWord'
}

export const actions: ActionTree<State, State> = {
  [Actions.addMorseChar]({ commit, getters, dispatch }, char: MorseChar) {
    commit(Mutations.addMorseChar, char)
    if (getters.filteredLetters.length === 1) {
      dispatch(Actions.autocompleteLetter)
    }
  },
  [Actions.autocompleteLetter]({ commit, dispatch, getters }) {
    const letter = getters.filteredLetters[0] || ''
    commit(Mutations.addLetter, letter)
    dispatch(Actions.guessWord)
  },
  async [Actions.guessWord]({ commit, state }) {
    const words = await guessWord(state.currentWord)
    console.log(words)
    commit(Mutations.setGuessedWord, words[0] || '')
  }
}
