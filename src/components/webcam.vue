<template>
  <div class="webcam">
    <div ref="webcamContainer" class="webcamContainer" />
    <timer :size="size" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { loadWebcamPredictionModel } from '../services/predictionModel/predictionModel'
import store from '../store'
import { Actions } from '../store/actions'
import Timer from './timer.vue'

export default defineComponent({
  components: { Timer },
  setup() {
    const size = 200
    const predictionMs = 800
    const webcamContainer = ref<HTMLElement>()
    let interval = 0

    onMounted(() => {
      if (webcamContainer.value) {
        loadWebcamPredictionModel(size, webcamContainer.value)
      }
      interval = window.setInterval(
        () => store.dispatch(Actions.predictNextChar),
        predictionMs
      )
    })

    onUnmounted(() => clearInterval(interval))

    return { size, webcamContainer }
  }
})
</script>

<style>
.webcam {
  position: relative;
  margin: 1rem 0;
}
.webcamContainer {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
}
</style>
