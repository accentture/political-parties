import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlRankingService } from './../../../../core/services/electoral-data/control-ranking.service';

@Component({
    selector: 'front-ranking',
    templateUrl: './front-ranking.component.html',
    styleUrls: ['./front-ranking.component.scss'],
    providers: [ControlRankingService],
})
export class FrontRankingComponent implements OnInit {
    zonesWithVotes: string[];
    constructor(private controlRankingService: ControlRankingService, private router: Router) {}

    ngOnInit(): void {
        this.zonesWithVotes = this.controlRankingService.getZonesWithRanking;
        this.redirectToOverlay();
    }

    //it will take to show presidenital or congressman ranking
    toRankingList(whatZone: string) {
        this.router.navigate([`/rankingCandidates/${whatZone}`]);
    }
    private redirectToOverlay() {
        //checking if doesn't exists zonesWithVotes
        if (this.zonesWithVotes === undefined) {
            this.router.navigate([`/overlay`]); //take to only overlay effect of website
        }
    }
}
