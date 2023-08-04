import { CucumberAllureWorld } from 'allure-cucumberjs'
import { ITestCaseHookParameter, setWorldConstructor } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page } from '@playwright/test'
import { IConfig } from 'config'

import config from '../../../config'
import attachCrossBrowser from './attach.cross.browser'
import attachScreenshot from './attach.screenshot'
import attachVideo from './attach.video'
import selectBrowserType from './select.browser.type'

let browser: Browser

export async function launchBrowser() {
  browser = await selectBrowserType(config.get('currentBrowser')).launch({
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
    firefoxUserPrefs: {
      'media.navigator.streams.fake': true,
      'media.navigator.permission.disabled': true,
    },
    headless: config.get('headless'),
    slowMo: config.get('slowMo'),
  })
}

export async function closeBrowser() {
  await browser.close()
}

export async function setupScenario(world: BrowserWorld) {
  world.config = config
  const recordVideo = config.get('saveVideos') ? { dir: 'reports/videos' } : undefined
  world.context = await browser.newContext({
    baseURL: config.get('baseUrl'),
    recordVideo: recordVideo,
    viewport: config.get('viewport'),
  })
  world.page = await world.context.newPage()
}

export async function teardownScenario(world: BrowserWorld, param: ITestCaseHookParameter) {
  await attachCrossBrowser(world, param)
  await attachScreenshot(world)
  if (world.page) await world.page.close()
  if (world.context) await world.context.close()
  await attachVideo(world)
}

export interface BrowserWorld extends CucumberAllureWorld {
  config: IConfig
  context: BrowserContext
  page: Page
}

setWorldConstructor(CucumberAllureWorld)
