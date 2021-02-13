import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'votes-in-percentaje',
    templateUrl: './votes-in-percentaje.component.html',
    styleUrls: ['./votes-in-percentaje.component.scss'],
})
export class VotesInPercentajeComponent implements OnInit {
    @Input() votesInPercentaje: number;

    counterPercentaje: number = 0;
    percentajeMax: number;
    controlCounter: number = 0;
    constructor() {}

    ngOnInit(): void {
        this.createCountOfPercent();
    }
    createCountOfPercent() {
        this.controlCounter = window.setInterval(() => {
            this.counterPercentaje += (0.1 * 100) / 100;
            this.counterPercentaje = (parseFloat(this.counterPercentaje.toFixed(1)) * 100) / 100;

            if (this.counterPercentaje >= this.votesInPercentaje) {
                clearInterval(this.controlCounter);
            }
        }, 6);
    }
}
