import { Injectable } from '@angular/core';
import { IresponseValidation } from './../interfaces/services/iresponse-validation.metadata';
import { ENUM_VALIDATION_OPTIONS } from './../emun/validations-otpions.enum';
import { ERRORS_VALIDATIONS } from '../constants/error/error-validations.const';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor() {}
    /**
     * Method that validate each field
     *@param value any
     *@param type ENUM_VALIDATION_OPTIONS
     */

    validateField(value: any, type: ENUM_VALIDATION_OPTIONS) {
        switch (type) {
            case ENUM_VALIDATION_OPTIONS.EMAIL:
                return this.validateEmail(value);

            case ENUM_VALIDATION_OPTIONS.PASSWORD:
                return this.validatePassword(value);
        }
    }

    /**
     * Validate email with pattern
     *@param value any

     */
    private validateEmail(value: any): IresponseValidation {
        const response: IresponseValidation = { msg: '', isValid: true };

        const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        response.isValid = pattern.test(value);

        response.msg = value === '' ? ERRORS_VALIDATIONS.EMAIL_REQUIRED_FIELD : ERRORS_VALIDATIONS.EMAIL_INVALID;

        return response;
    }

    /**
     * Validate paasword with pattern
     *@param value any
     *
     */
    private validatePassword(value: any): IresponseValidation {
        const response: IresponseValidation = { msg: '', isValid: true };
        //const pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

        response.msg =
            value === '' ? ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD : ERRORS_VALIDATIONS.PASSWORD_REQUIRED_PATTERN;
        return response;
    }
}
