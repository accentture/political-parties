import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'vote-button',
    templateUrl: './vote-button.component.html',
    styleUrls: ['./vote-button.component.scss'],
})
export class VoteButtonComponent implements OnInit {
    @Output() vote = new EventEmitter<boolean>();

    constructor(private router: Router) {}

    ngOnInit(): void {}

    emitVote() {
        this.vote.emit(true);
    }

}
