import { MorseChar } from '../services/morse/domain/morseChars'

export const state = {
  sentence: 'Lorem ipsum dolor sit amet',
  currentWord: 'WORL',
  morseChars: [] as MorseChar[]
}

export type State = typeof state
