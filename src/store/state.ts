import { MorseChar } from '../services/morse/morseChars'

export const state = {
  sentence: '',
  currentWord: '',
  guessedWord: '',
  morseChars: [] as MorseChar[]
}

export type State = typeof state
