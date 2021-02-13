import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-corruption-phrases',
    templateUrl: './corruption-phrases.component.html',
    styleUrls: ['./corruption-phrases.component.css'],
})
export class CorruptionPhrasesComponent implements OnInit {
    @Input() data: any;

    constructor() {}

    ngOnInit(): void {}
}
