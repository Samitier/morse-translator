<template>
  <svg :width="size" :height="size">
    <circle
      class="background"
      :r="size / 2"
      :cx="size / 2"
      :cy="size / 2"
    ></circle>
    <circle
      v-if="isTimerStarted"
      class="timer"
      :r="size / 2"
      :cx="size / 2"
      :cy="size / 2"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import store from '../store'
import { Actions } from '../store/actions'

export default defineComponent({
  props: {
    size: {
      type: Number,
      required: true
    }
  },
  setup() {
    const totalMs = 2000
    let isTimerStarted = ref(false)
    let timeout: number

    watch(store.state.morseChars, (morseChars) => {
      if (timeout) clearTimeout(timeout)
      isTimerStarted.value = false
      if (!morseChars.length) return

      window.setTimeout(() => (isTimerStarted.value = true))
      timeout = window.setTimeout(() => {
        store.dispatch(Actions.autocompleteLetter)
        isTimerStarted.value = false
      }, totalMs)
    })
    return { isTimerStarted }
  }
})
</script>

<style scoped>
svg {
  overflow: visible;
  transform: rotateZ(-90deg);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  margin: auto;
}
.background {
  stroke: var(--color3);
  stroke-width: 1rem;
}
.timer {
  stroke-dasharray: 630px;
  stroke-dashoffset: 0px;
  stroke-width: 1rem;
  stroke: white;
  animation: countdown 2s linear forwards;
}

@keyframes countdown {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 630px;
  }
}
</style>
