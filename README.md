# BDD Test Suite

BDD tests using [Cucumber](https://cucumber.io/) runner with [Playwright](https://playwright.dev/) browser automation.

## Requirements

You will need:

- Node.js v18+

## Prepare Environment

Install dependencies, local browsers, git hooks:

`npm i`

## Run Tests

See the test suite usage with:

`./bdd`

For the full, cross-browser, parallel suite on local devbox run:

`./bdd test`

The same on CI:

`./bdd test -e ci`

### Smart Tags

Put below tags in scenario files and they will work out-of-the-box:

- `@ignore`: completely ignore selected scenario(s)
- `@skip`: skip selected scenario(s) but report them as skipped

## Test Reports

Each run will save the result reports inside `reports` folder. See individual scenarios for attached screenshots and
videos.

- Simple static HTML report from Cucumber: `reports/cucumber-report-<browser>.html`
- Serve fancy Allure report with: `./bdd report`
- Junit static report: `reports/cucumber-report-<browser>.xml`

## Contributing

### Linter

Upon each commit the JS linter will check the code using pre-commit hook. If it fails, you can try to automatically fix
all errors with:

`npm run eslint:fix`

If it still fails, you need to fix errors manually.

## @todo

- use page objects

