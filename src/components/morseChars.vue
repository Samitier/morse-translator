<template>
  <div
    v-for="(char, i) in morseChars"
    :key="i"
    :class="{ dash: char === dash, dot: char === dot, isSmall }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { dash, dot } from '/@/services/morse/domain/morseChars'

export default defineComponent({
  props: {
    morseChars: {
      type: Array,
      required: true
    },
    isSmall: {
      type: Boolean,
      required: false
    }
  },
  setup() {
    return { dot, dash }
  }
})
</script>

<style scoped>
.dot,
.dash {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  background: var(--color2);
  display: inline-block;
}
.dash {
  width: 1rem;
}

.isSmall.dot,
.isSmall.dash {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0.1rem;
  border-radius: 0.3rem;
}
.isSmall.dash {
  width: 0.6rem;
}
</style>
