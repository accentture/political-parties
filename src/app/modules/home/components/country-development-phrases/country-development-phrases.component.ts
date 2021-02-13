import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-country-development-phrases',
    templateUrl: './country-development-phrases.component.html',
    styleUrls: ['./country-development-phrases.component.css'],
})
export class CountryDevelopmentPhrasesComponent implements OnInit {
    @Input() data: any;
    constructor() {}

    ngOnInit(): void {}
}
