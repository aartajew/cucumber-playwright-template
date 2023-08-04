require('ts-node/register')

const { default: config } = require('./config.ts')

if (config.debug) {
  console.log('Resolved node-config:', config.util.getEnv('NODE_ENV'), config.util.getConfigSources(), config)
}

process.env.FORCE_COLOR = config.colors ? 1 : 0

const cucumber = {
  backtrace: true,
  format: [
    'progress',
    `html:reports/cucumber-report-${config.currentBrowser}.html`,
    `junit:reports/cucumber-report-${config.currentBrowser}.xml`,
    './formatters/allure.ts:./reports/dummy.txt',
  ],
  formatOptions: {
    printAttachments: false,
    snippetInterface: 'async-await',
  },
  parallel: config.parallel,
  publishQuiet: true,
  retry: config.retry,
  retryTagFilter: '@flaky',
  require: ['features/**/*.ts'],
  requireModule: ['ts-node/register'],
  tags: config.only ? '@only' : 'not @ignore',
}

module.exports = {
  default: cucumber,
  chromium: cucumber,
  firefox: cucumber,
  webkit: cucumber,
}
