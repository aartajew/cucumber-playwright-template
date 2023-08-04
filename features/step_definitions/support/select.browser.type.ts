import { chromium, firefox, webkit } from '@playwright/test'

export default function (type: string) {
  switch (type) {
    case 'chromium':
      return chromium
    case 'firefox':
      return firefox
    case 'webkit':
      return webkit
    default:
      throw new Error(`Browser type not supported: ${type}`)
  }
}
