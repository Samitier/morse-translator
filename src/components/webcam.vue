<template>
  <div class="webcam">
    <div ref="webcamContainer" class="webcamContainer" />
    <timer :size="size" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Webcam } from '@teachablemachine/image'
import Timer from './timer.vue'

export default defineComponent({
  components: { Timer },
  setup() {
    const size = 200
    const webcamContainer = ref<HTMLElement>()
    const webcam = new Webcam(size, size, true)

    onMounted(async () => {
      await webcam.setup()
      await webcam.play()
      webcamContainer.value?.appendChild(webcam.canvas)
      updateCamera()
    })

    function updateCamera() {
      webcam.update() // update the webcam frame
      window.requestAnimationFrame(updateCamera)
    }

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
