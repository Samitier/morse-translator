<template>
  <div class="abecedary card">
    <div
      v-for="(morseChars, letter) in abecedary"
      :key="letter"
      class="morseChars"
      :class="{
        suggested: filteredLetters.includes(letter)
      }"
    >
      <div class="letter" v-text="letter" />
      <morse-chars :morse-chars="morseChars" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import store from '../store'
import MorseChars from './morseChars.vue'
import { abecedary } from '/@/services/morse/abecedary'

export default defineComponent({
  components: { MorseChars },
  setup() {
    const filteredLetters = computed(() => store.getters.filteredLetters)
    return { abecedary, filteredLetters }
  }
})
</script>

<style scoped>
.morseChars {
  display: flex;
  align-items: center;
  margin: 0.2rem;
  opacity: 0.1;
  transition: opacity 0.3s;
}

.morseChars.suggested {
  opacity: 1;
}

.letter {
  color: var(--color2);
  text-transform: uppercase;
  width: 1rem;
}
</style>
