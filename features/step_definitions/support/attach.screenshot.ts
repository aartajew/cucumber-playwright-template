import { BrowserWorld } from './browser.world'

import config from '../../../config'

export default async function (world: BrowserWorld) {
  if (world.page && config.get('saveScreenshots')) {
    const image = await world.page.screenshot()
    world.attach(image, 'image/png')
  }
}
