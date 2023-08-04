const dotenv = require('dotenv')
dotenv.config() // load .env before importing config
const config = require('config')
const { program, Option } = require('commander')

const actionTest = require('./action.test')
const actionReport = require('./action.report')
const browsers = require('./supported.browsers')
const intParser = require('./int.parser')

program
  .name('./bdd')
  .description('Cucumber.js BDD test runner powered by Playwright browser automation')
  .showHelpAfterError()

// don't set default values to be able to overwrite settings for selected env
program
  .command('test')
  .description('run test suite')
  .option('-e, --env <name>', 'environment configuration to use', process.env.NODE_ENV) // must be always set, hence default value
  .addOption(new Option('-b, --browsers <name...>', 'browsers to run').choices(browsers).default(config.browsers))
  .option('-p, --parallel <number>', `number of parallel workers per browser (default: ${config.parallel})`, intParser)
  .option('-r, --retry <number>', `retry failed scenarios tagged @flaky (default: ${config.retry})`, intParser)
  .option('-o, --only', `run only scenarios tagged @only (default: ${config.only})`)
  .option('-s, --slow-mo <ms>', `slow down browser interactions (default: ${config.slowMo})`, intParser)
  .option('-d, --debug', `output extra debug info (default: ${config.debug})`)
  .option('-i, --inspect', `run Playwright inspector (default: ${config.inspect})`)
  .option('--headless', `hide live browser preview (default: ${config.headless})`)
  .option('--no-headless', `show live browser preview (default: ${!config.headless})`)
  .option('--colors', `enable colors in console and reports (default: ${config.colors})`)
  .option('--no-colors', `disable colors in console and reports (default: ${!config.colors})`)
  .action(actionTest)

program.command('report').description('serve Allure report').action(actionReport)

program.parse()
