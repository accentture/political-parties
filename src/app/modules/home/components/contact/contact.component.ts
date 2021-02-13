import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactModel } from '../../../../shared/models/contact.model';
import { ControlUserService } from './../../../../core/services/user/control-user.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ControlUserService],
})
export class ContactComponent implements OnInit {
    user: ContactModel;

    dayCollection: number[] = [];
    yearCollection: number[] = [];

    //to create date of birth
    birthday: number;
    monthOfBirthday: string;
    yearOfBirthday: number;

    status: string = 'failed';

    @ViewChild('warningAboutName') warningAboutName: any; //picking value of template reference value

    constructor(private controlUserService: ControlUserService) {
        this.user = new ContactModel('', '', '', '', '', '');
        this.dayCollection = Array(31)
            .fill(0)
            .map((value, index) => index);

        this.yearCollection = Array(61)
            .fill(1950)
            .map((value, index) => (value += index++));
    }
    onSubmit(paramsFormContac: any) {
        this.user.dateOfBirth = `${this.birthday}-${this.monthOfBirthday}-${this.yearOfBirthday}`;
        this.controlUserService.saveUser(this.user);
        paramsFormContac.reset();

        this.status = 'success';
    }
    ngOnInit(): void {}
}
