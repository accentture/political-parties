/* I can set routes of all endpoints of project here, it allows to modify only this file and not the components or services */

import { environment as ENV } from '../../../../../environments/environment'

export const API_ROTUES = {
    AUTH: {
        LOGIN: `${ENV.uri}auth/login`
    }

}