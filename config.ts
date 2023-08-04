import dotenv from 'dotenv'

dotenv.config() // load .env before importing config

// inside main cucumber-js and parallel worker process
if (process.env.TEST_OPTS) {
  // inside main cucumber-js process (not a parallel worker)
  if (process.argv.includes('-p')) {
    process.env.TEST_BROWSER = process.argv.slice(-1)[0]
  }
  const opts = JSON.parse(process.env.TEST_OPTS) as { env: string; currentBrowser: string }
  opts.currentBrowser = process.env.TEST_BROWSER!
  process.env.NODE_ENV = opts.env
  process.env.NODE_CONFIG = JSON.stringify(opts)
}

// load hierarchical config after setting all env variables
export { default } from 'config'
