import { ERRORS_VALIDATIONS } from './../../error/error-validations.const';
import { Ifield } from './../../../interfaces/forms/ifield.metadata';
import { AuthenticationService } from './../../../services/authentication.service';
import { ENUM_VALIDATION_OPTIONS } from '../../../emun';

/* the benefice to user constant is for exmaple, that when I need to mofigy a thing, only modify this component */
export const CONST_LOGIN_PAGE: {
    FORM: {
        email: Ifield;
        password: Ifield;
    };
    ICONS: any[];
    STYLE_BACKGROUND: any;
    LOGO: string;
} = {
    FORM: {
        email: {
            val: '',
            error: ERRORS_VALIDATIONS.EMAIL_REQUIRED_FIELD,
            isValid() {
                const authenticationService = new AuthenticationService();
                const validationEmail = authenticationService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);

                this.error = validationEmail.msg;
                return validationEmail.isValid;
            },
        },
        password: {
            val: '',
            error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const authenticationService = new AuthenticationService();
                const validationPassword = authenticationService.validateField(
                    this.val,
                    ENUM_VALIDATION_OPTIONS.PASSWORD
                );
                this.error = validationPassword.msg;
                return validationPassword.isValid;
            },
        },
    },
    ICONS: ['faFacebookSquare', 'faTwitterSquare', 'faYoutubeSquare'],
    STYLE_BACKGROUND: {
        backGrondImage: `url${'IMAGES_ROUTES.BACKGROUND_LOGIN'}`,
    },
    LOGO: 'IMAGES_ROTES.LOG',
};