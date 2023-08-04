import { setDefaultTimeout } from '@cucumber/cucumber'

import config from '../../../config'

setDefaultTimeout(process.env.PWDEBUG ? -1 : config.get('timeout'))
