import { BrowserWorld } from './browser.world'

import config from '../../../config'
import { upperCaseFirst } from '../../../util/string'
import { ITestCaseHookParameter } from '@cucumber/cucumber'

export default async function (world: BrowserWorld, param: ITestCaseHookParameter) {
  const browserName = config.get<string>('currentBrowser')
  const browserNameCapitalized = upperCaseFirst(browserName)
  const featureName = param.gherkinDocument.feature!.name
  await world.parameter('Browser', browserName)
  await world.parentSuite(browserNameCapitalized)
  await world.owner(featureName)
}
