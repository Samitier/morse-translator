<template>
  <div class="controls card">
    <div @click="addDot">
      ✊🏻
      <morse-chars :morse-chars="[dot]" />
    </div>
    <div @click="addDash">
      ✋🏻
      <morse-chars :morse-chars="[dash]" />
    </div>
    <div @click="addDash">👍🏻 ⬆️</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MorseChars from './morseChars.vue'
import store from '/@/store'
import { Actions } from '../store/actions'
import { dash, dot } from '/@/services/morse/morseChars'

export default defineComponent({
  components: { MorseChars },
  setup() {
    return {
      dash,
      dot,
      addDash: () => store.dispatch(Actions.addMorseChar, dash),
      addDot: () => store.dispatch(Actions.addMorseChar, dot)
    }
  }
})
</script>
