import { After, AfterAll, Before, BeforeAll, ITestCaseHookParameter } from '@cucumber/cucumber'

import { BrowserWorld, launchBrowser, closeBrowser, setupScenario, teardownScenario } from './browser.world'

BeforeAll(async function () {
  await launchBrowser()
})

Before({ tags: '@skip' }, function () {
  return 'skipped'
})

Before(async function (this: BrowserWorld) {
  await setupScenario(this)
})

After(async function (this: BrowserWorld, param: ITestCaseHookParameter) {
  await teardownScenario(this, param)
})

AfterAll(async function () {
  await closeBrowser()
})
