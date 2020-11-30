<template>
  <div class="sentence card" v-text="sentence" />
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
</style>
