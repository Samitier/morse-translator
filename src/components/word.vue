<template>
  <div class="card">
    <div class="word">{{ word }}</div>
    <morse-chars :morse-chars="morseChars" is-small />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import MorseChars from './morseChars.vue'
import store from '/@/store'

export default defineComponent({
  components: { MorseChars },
  setup() {
    return {
      word: computed(() => store.state.currentWord),
      morseChars: computed(() => store.state.morseChars)
    }
  }
})
</script>

<style scoped>
.word {
  font-size: 2.3rem;
  letter-spacing: 0.5rem;
}
.card {
  margin: 2rem 0;
  position: relative;
  display: flex;
  align-items: flex-end;
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
