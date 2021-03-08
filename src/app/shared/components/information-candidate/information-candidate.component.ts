import { Component, OnInit, OnChanges, Input, OnDestroy, Optional } from '@angular/core';
import { Observable } from 'rxjs';

import { completeCandidate } from '../../../core/models/complete-candidate';
import { VotesControllerService } from '../../../core/services/electoral-data/votes-controller.service';
@Component({
    selector: 'information-candidate',
    templateUrl: './information-candidate.component.html',
    styleUrls: ['./information-candidate.component.scss'],
    providers: [VotesControllerService],
})
export class InformationCandidateComponent implements OnInit, OnDestroy, OnChanges {
    @Input('zoneCandidate') zone: string; //it allows to check what parent component is using this component
    @Input() informationCandidate: completeCandidate | any; //for general information candidate and electoral ranking
    @Input() totalCandidates: number;
    @Input() index: any;

    namesAndSurnames: string;
    votes$: Observable<number>;
    votes: number; //for presidential and congressman votes

    constructor(@Optional() private votesControllerService: VotesControllerService) {}

    ngOnInit(): void {
        this.buildNamesAndSurnames();
        this.askVotes();
        this.updateStateOfVotes();
    }
    ngOnChanges(): void {
        this.updateStateOfVotes();
    }
    ngOnDestroy(): void {
        //to charge electoralRanking
        this.zone = '';
    }
    buildNamesAndSurnames() {
        this.namesAndSurnames = `${this.informationCandidate.Prenombres} ${this.informationCandidate['Primer apellido']} ${this.informationCandidate['Segundo apellido']}`;
    }
    askVotes() {
        this.votesControllerService.askForVotes(this.zone, this.namesAndSurnames);
    }
    sendVote(vote: boolean) {
        if (vote) {
            this.votes = 1;
            this.votesControllerService.saveVote(this.zone, this.namesAndSurnames, this.votes, this.totalCandidates);
        }
    }

    //update votes on the view
    updateStateOfVotes() {
        this.votes$ = this.votesControllerService.getVotesUpdated();
        this.votes$.subscribe((votes) => {
            this.votes = votes;
        });
    }
}
