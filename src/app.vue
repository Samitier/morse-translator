<template>
  <div class="app">
    <sentence />
    <word />
    <webcam />
  </div>
  <div class="info-section hide-mobile">
    <abecedary />
    <controls />
  </div>
</template>

<script lag="ts">
import { defineComponent } from 'vue'
import abecedary from '/@/components/abecedary.vue'
import word from '/@/components/word.vue'
import webcam from '/@/components/webcam.vue'
import sentence from '/@/components/sentence.vue'
import controls from '/@/components/controls.vue'

export default defineComponent({
  components: { webcam, abecedary, sentence, word, controls }
})
</script>

<style scoped>
.app,
.info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  display: flex;
  height: 100%;
}
.app {
  flex: 1;
}
.app,
.info-section > * {
  margin: 0.5rem 1rem;
}
</style>
