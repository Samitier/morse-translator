<template>
  <div v-if="sentence" class="sentence card">
    <b>You said:</b> {{ sentence }}
  </div>
  <div v-else class="intro card">
    Hello! Try to write some words in morse with the hand gestures at the
    bottom corner.
    <br /><br />
    Your computer will try to understand what you are saying!
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import store from '/@/store'

export default defineComponent({
  setup() {
    return {
      sentence: computed(() => store.state.sentence)
    }
  }
})
</script>

<style scoped>
.sentence {
  font-size: 1.3rem;
  display: inline-block;
}
.intro {
  font-size: 1.2rem;
  text-align: center;
}
</style>
