import * as tmImage from '@teachablemachine/image'

export function initModel(): Promise<tmImage.CustomMobileNet> {
  return tmImage.load('/tm-model/model.json', '/tm-model/metadata.json')
}
