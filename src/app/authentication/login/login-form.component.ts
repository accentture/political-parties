import { Component, OnInit } from '@angular/core';
import { CONST_LOGIN_PAGE } from './constants/pages/login/login.const';

@Component({
    selector: 'app-login-form, [app-login-form]', // [app-login-form] : it allows import    app-login-form   through a tag
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
    public data = CONST_LOGIN_PAGE;
    public loginForm;
    constructor() {
        //data that must be transformed or validations should be in a module shared

        this.loginForm = this.data.FORM;
    }

    get isValidForm() {
        //here we can replace with a class for not validate field by field
        return this.loginForm.email.isValid() && this.loginForm.password.isValid();
    }

    //this method will connect with API
    authenticate() {
        console.log('authenticate');
    }
}
