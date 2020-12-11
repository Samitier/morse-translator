import * as tmImage from '@teachablemachine/image'

let model: tmImage.CustomMobileNet | null = null
let webcam: tmImage.Webcam | null = null

const validThereshold = 0.8

type Prediction = {
  className: string
  probability: number
}

type ClassName = 'dash' | 'dot' | 'ok' | 'nothing'

export async function loadWebcamPredictionModel(
  size: number,
  webcamContainer: HTMLElement
): Promise<void> {
  model = await tmImage.load(
    '/tm-model/model.json',
    '/tm-model/metadata.json'
  )
  webcam = new tmImage.Webcam(size, size, true)
  await webcam.setup()
  await webcam.play()
  webcamContainer?.appendChild(webcam.canvas)
  update()
}

export async function getPrediction(): Promise<ClassName> {
  if (model && webcam) {
    const predictions: Prediction[] = await model.predict(webcam.canvas)
    return predictions.find((a) => a.probability > validThereshold)
      ?.className as ClassName
  } else return Promise.reject()
}

async function update() {
  webcam?.update()
  window.requestAnimationFrame(update)
}
