<template>
  <div class="controls card">
    <div>
      ✊🏻
      <morse-chars :morse-chars="[dot]" />
    </div>
    <div>
      ✋🏻
      <morse-chars :morse-chars="[dash]" />
    </div>
    <div>👍🏻 ⬆️</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import MorseChars from './morseChars.vue'
import store from '/@/store'
import { Actions } from '../store/actions'
import { dash, dot } from '/@/services/morse/morseChars'

export default defineComponent({
  components: { MorseChars },
  setup() {
    const onKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Backspace') store.dispatch(Actions.undoLastLetter)
    }
    onMounted(() => document.addEventListener('keydown', onKeyDown))
    onBeforeUnmount(() =>
      document.removeEventListener('keydown', onKeyDown)
    )
    return {
      dash,
      dot
    }
  }
})
</script>
