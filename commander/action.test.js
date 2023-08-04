const nra = require('npm-run-all')
const runOptions = require('./run.options')

function passOptsToProcessEnv(opts) {
  process.env.TEST_OPTS = JSON.stringify(opts)
}

function enableDebug(debug, opts) {
  if (debug) {
    console.log('Resolved options:', opts)
    process.env.DEBUG = 'cucumber'
  }
}

function enableInspect(inspect) {
  if (inspect) {
    process.env.PWDEBUG = 1
  }
}

module.exports = opts => {
  const { browsers, debug, inspect } = opts
  enableDebug(debug, opts)
  enableInspect(inspect)
  passOptsToProcessEnv(opts)

  const parallel = browsers.map(browser => `test:${browser}`).join(' ')
  const silent = debug ? '' : ' --silent'
  const serial = ['report:clean', 'eslint', `test:parallel -- ${silent} ${parallel}`, 'report:generate']

  nra(serial, runOptions)
    .then(results => console.log(debug ? results : ''))
    .catch(error => {
      console.error(debug ? error : '')
      process.exitCode = error.code
    })
}
