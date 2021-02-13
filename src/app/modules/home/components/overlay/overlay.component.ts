import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}
    redirectToOptionsVotes() {
        this.router.navigate(['/front']);
    }
}
