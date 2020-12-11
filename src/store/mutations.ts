import { MutationTree } from 'vuex'
import { MorseChar } from '../services/morse/morseChars'
import { State } from './state'

export enum Mutations {
  addMorseChar = 'addMorseChar',
  addLetter = 'addLetter',
  setCurrentWord = 'setCurrentWord',
  setGuessedWord = 'setGuessedWord',
  addWordToSentence = 'addWordToSentence'
}

export const mutations: MutationTree<State> = {
  [Mutations.addMorseChar](state, char: MorseChar) {
    state.morseChars.push(char)
  },
  [Mutations.setCurrentWord](state, currentWord: string) {
    state.currentWord = currentWord
  },
  [Mutations.addLetter](state, letter: string) {
    state.currentWord += letter
    state.morseChars.splice(0, state.morseChars.length)
  },
  [Mutations.setGuessedWord](state, guessedWord: string) {
    state.guessedWord = guessedWord
  },
  [Mutations.addWordToSentence](state, word: string) {
    state.sentence += ' ' + word
  }
}
