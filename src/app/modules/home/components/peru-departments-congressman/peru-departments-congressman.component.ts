import { Component, OnInit, ViewChild, Injector, Inject, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { DEPARTMENTS, department, PERU_DEPARTMENTS } from '../../../../core/services/peru-departments.service';
import { trigger, animate, state, style, transition, query, stagger } from '@angular/animations';

@Component({
    selector: 'peru-departments',
    templateUrl: './peru-departments-congressman.component.html',
    styleUrls: ['./peru-departments-congressman.component.scss'],
    providers: [{ provide: DEPARTMENTS, useValue: PERU_DEPARTMENTS }],
    animations: [
        trigger('enterFromRight', [
            transition(':enter', [
                query('a', [
                    style({ opacity: 0, transform: 'translateY(-200px)' }),
                    stagger(80, [animate(200, style({ opacity: 1, transform: 'none' }))]),
                ]),
            ]),
        ]),
    ],
})
export class PeruDepartmentsComponent implements OnInit {
    @HostBinding('@enterFromRight')
    peruDepartments: department[];
    message: string;
    deparmentId: string;
    departmentName: string;

    //using viewChild, it works as selector in javascript, it works as the "id" attribute
    @ViewChild('infoDeparmentButton') infoDeparmentButton;

    constructor(@Inject(DEPARTMENTS) _departments: department[], private router: Router) {
        this.peruDepartments = _departments;
    }

    ngOnInit(): void {}

    getDeparmentName(deparmentId: string) {
        let deparment: any;
        for (let x = 0; x < this.peruDepartments.length; x++) {
            deparment = this.peruDepartments[x];
            if (deparment.id == deparmentId) {
                return deparment.name
                    .toUpperCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''); //remove diaritics
            }
        }
    }

    goCandidateList(e: any) {
        this.deparmentId = e.path[0].id;
        this.departmentName = this.getDeparmentName(this.deparmentId);

        this.router.navigate([`listCandidates/${this.departmentName.toLowerCase()}`]);
    }
}
