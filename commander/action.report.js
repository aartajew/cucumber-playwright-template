const nra = require('npm-run-all')
const runOptions = require('./run.options')

module.exports = async () => {
  await nra(['report:serve'], runOptions)
}
