<template>
  <div v-if="word || morseChars.length" class="card">
    <div v-if="word" class="word">{{ word }}</div>
    <div class="relative">
      <div v-if="guessedWord" class="guessedWord">{{ guessedWord }}</div>
      <div :class="{ morseChars: word && guessedWord }">
        <morse-chars :morse-chars="morseChars" is-small />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import MorseChars from './morseChars.vue'
import store from '/@/store'

export default defineComponent({
  components: { MorseChars },
  setup() {
    let word = computed(() => store.state.currentWord)
    let guessedWord = computed(() =>
      store.state.guessedWord.replace(word.value, '')
    )

    return {
      word,
      guessedWord,
      morseChars: computed(() => store.state.morseChars)
    }
  }
})
</script>

<style scoped>
.word,
.guessedWord {
  font-size: 2.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}
.guessedWord {
  opacity: 0.3;
}
.relative {
  position: relative;
}
.morseChars {
  bottom: -0.7rem;
  left: 0;
  position: absolute;
  min-width: 10rem;
}
.card {
  margin: 2rem 0;
  padding: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  min-height: 3rem;
}
.card::after {
  position: absolute;
  bottom: -1rem;
  margin: auto;
  left: 0;
  right: 0;
  width: 0;
  content: '';
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1rem solid var(--color3);
}
</style>
