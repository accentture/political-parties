import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, animate, state, style, transition } from '@angular/animations';

@Component({
    selector: 'front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.scss'],
    animations: [
        trigger('enterFromLeft', [
            state('current', style({ transform: 'translateX(0px)' })),
            transition('* => current', [style({ transform: 'translateX(-200px)' }), animate(400)]),
        ]),
    ],
})
export class FrontComponent implements OnInit {
    constructor(private router: Router) {}

    goPresidentialCandidatesList() {
        this.router.navigate([`listCandidates/presidential`]);
    }
    ngOnInit(): void {}
}
