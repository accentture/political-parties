import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'information-ranking-candidate',
    templateUrl: './information-ranking-candidate.component.html',
    styleUrls: ['./information-ranking-candidate.component.scss'],
})
export class InformationRankingCandidateComponent implements OnInit {
    @Input() photo: any; //for general information candidate
    @Input() informationCandidate: any; //for general information candidate and electoral ranking

    constructor() {}
    ngOnInit(): void {}
}
