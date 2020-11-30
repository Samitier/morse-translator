<template>
  <div ref="webcamContainer" class="webcamContainer" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Webcam } from '@teachablemachine/image'

export default defineComponent({
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

    return { webcamContainer }
  }
})
</script>

<style>
.webcamContainer {
  border: 4px solid var(--color3);
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
}
</style>
