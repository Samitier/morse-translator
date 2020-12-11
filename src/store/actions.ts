import { ActionTree } from 'vuex'
import { guessWord } from '../services/guessWord/guessWord'
import { dash, dot, MorseChar } from '../services/morse/morseChars'
import { getPrediction } from '../services/predictionModel/predictionModel'
import { Mutations } from './mutations'
import { State } from './state'

export enum Actions {
  addMorseChar = 'addMorseChar',
  autocompleteLetter = 'autocompleteLetter',
  guessWord = 'guessWord',
  predictNextChar = 'predictNextChar',
  addWordToSentence = 'addWordToSentence'
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
  async [Actions.predictNextChar]({ dispatch }) {
    const prediction = await getPrediction()
    if (prediction === 'dash') dispatch(Actions.addMorseChar, dash)
    else if (prediction === 'dot') dispatch(Actions.addMorseChar, dot)
    else if (prediction === 'ok') dispatch(Actions.addWordToSentence)
  },
  async [Actions.addWordToSentence]({ commit, state }) {
    commit(Mutations.addWordToSentence, state.guessedWord)
    commit(Mutations.setCurrentWord, '')
    commit(Mutations.setGuessedWord, '')
  },
  async [Actions.guessWord]({ commit, state }) {
    const words = await guessWord(state.currentWord)
    const guessedWord = words[0] ?? ''
    if (!guessedWord.includes(state.currentWord)) {
      commit(Mutations.setCurrentWord, guessedWord)
    }
    commit(Mutations.setGuessedWord, guessedWord)
  }
}
