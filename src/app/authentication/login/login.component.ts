/* when I developt breake your components in components more small */

import { CONST_LOGIN_PAGE } from './constants/pages/login/login.const';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    /* 
    --there are 5 ways to work with forms:
      1. ng model
      2 custimization
      3 reactive forms
      4 validations customization
      5 work with classes, reactive forms, ngModel forms
    --must exist two validation system : one in the front-end and other in the backend
    --the target of angular is work everything with services, The logic bussines allows in the service
  */
    //removing ngOnInit to have my component clean, it serves to understand better the code

    public data = CONST_LOGIN_PAGE; // it stay to charge data and styles
}
