<template>
  <div class="abecedary card">
    <div
      v-for="(morseChars, letter) in abecedary"
      :key="letter"
      class="morseChars"
    >
      <div class="letter" v-text="letter" />
      <morse-chars :morse-chars="morseChars" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MorseChars from './morseChars.vue'
import { abecedary } from '/@/services/morse/domain/abecedary'

export default defineComponent({
  components: { MorseChars },
  setup() {
    return { abecedary }
  }
})
</script>

<style scoped>
.letter {
  color: var(--color2);
  text-transform: uppercase;
  width: 1rem;
}

.morseChars {
  display: flex;
  align-items: center;
  margin: 0.2rem;
}
</style>
