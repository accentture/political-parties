import { Injectable } from '@angular/core';
import { ContactModel } from './../../../shared/models/contact.model';

@Injectable({
    providedIn: 'root',
})
export class ControlUserService {
    //private user: ContactModel;
    private users: any[] = [];

    constructor() {
        //this.user = undefined;
    }
    saveUser(user: ContactModel) {
        this.users.push(user);
        //this.user = user;
    }

    get getUser() {
        return this.users[0];
    }
}
