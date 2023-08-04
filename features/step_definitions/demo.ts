import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

import { BrowserWorld } from './support/browser.world'
import config from '../../config'

When('a user has navigated to the Playwright homepage', async function (this: BrowserWorld) {
  await this.page.goto(config.get('baseUrl'))
})

When('a user clicks on {string} button', async function (this: BrowserWorld, button: string) {
  await this.page.getByText(button).click()
})

Then('title {string} should be displayed on the webUI', async function (this: BrowserWorld, title: string) {
  await expect(this.page).toHaveTitle(new RegExp(title))
})

Then('I invoke pending step', function () {
  return 'pending'
})

Then('I invoke flaky step', function (this: BrowserWorld) {
  const random = Math.random()
  this.attach(`Expect ${random.toString()} to be greater than 0.5 (${this.config.get<string>('currentBrowser')})`)
  expect(random).toBeGreaterThan(0.5)
})
