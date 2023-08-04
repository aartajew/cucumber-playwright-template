import { AllureRuntime } from 'allure-js-commons'
import { CucumberJSAllureFormatter } from 'allure-cucumberjs'
import { stripAscii } from 'allure-js-commons'

export default class extends CucumberJSAllureFormatter {
  constructor(options: never) {
    super(options, new AllureRuntime({ resultsDir: './reports/allure-results' }), {
      exceptionFormatter: message => stripAscii(message),
    })
  }
}
