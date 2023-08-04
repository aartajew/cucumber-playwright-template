import { promises } from 'fs'
import { resolve } from 'path'

import { BrowserWorld } from './browser.world'
import config from '../../../config'

export default async function (world: BrowserWorld) {
  if (world.page && config.get('saveVideos')) {
    try {
      const videoPath = await world.page.video()?.path()
      if (videoPath) {
        const contents = await promises.readFile(resolve(videoPath))
        const data = contents.toString('base64')
        world.attach(data, 'base64:video/webm')
      }
    } catch (e) {
      world.attach('', 'base64:video/webm')
    }
  }
}
