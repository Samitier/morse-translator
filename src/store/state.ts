import { MorseChar } from '../services/morse/morseChars'

export const state = {
  sentence: 'Lorem ipsum dolor sit amet',
  currentWord: '',
  guessedWord: '',
  morseChars: [] as MorseChar[]
}

export type State = typeof state
