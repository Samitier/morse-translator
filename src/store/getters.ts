import { GetterTree } from 'vuex'
import { abecedary } from '../services/morse/domain/abecedary'
import { State } from './state'

export const getters: GetterTree<State, State> = {
  filteredLetters(state) {
    return Object.keys(abecedary).filter(
      (letter) =>
        !state.morseChars.some(
          (morseChar, i) => abecedary[letter][i] !== morseChar
        )
    )
  }
}
