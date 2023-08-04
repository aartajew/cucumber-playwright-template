import { BrowserWorld } from '../support/browser.world'
import { BrowserContext, Page } from '@playwright/test'
import { ICreateAttachment } from 'allure-cucumberjs/node_modules/@cucumber/cucumber/lib/runtime/attachment_manager/index'
import { IConfig } from 'config'

export default class BasePage {
  attach: ICreateAttachment
  config: IConfig
  context: BrowserContext
  page: Page

  constructor(world: BrowserWorld) {
    this.attach = world.attach
    this.config = world.config
    this.context = world.context
    this.page = world.page
  }
}
