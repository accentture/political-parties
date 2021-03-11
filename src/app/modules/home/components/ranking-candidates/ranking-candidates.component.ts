import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router'; //NavigationEnd -> an event triggered when a navigation ends successfully

import { ControlRankingService } from '../../../../core/services/electoral-data/control-ranking.service';

@Component({
    selector: 'ranking-candidates',
    templateUrl: './ranking-candidates.component.html',
    styleUrls: ['./ranking-candidates.component.scss'],
    providers: [ControlRankingService],
})
export class RankingCandidatesComponent implements OnInit, OnDestroy {
    myCustomSubscription: any;
    ranking: any[];
    whatRanking: string;
    needPercentaje: boolean = true; //it control that once percentaje is created

    constructor(
        //setting as optional dependency
        @Optional() public controlRankingService: ControlRankingService,
        @Optional() public activatedRoute: ActivatedRoute,
        @Optional() public router: Router
    ) {
        //events -> allows to track the cyclelife of the router
        //subscribe -> subscribing to router events
        this.myCustomSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // Trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false; //change status of this navegated component to false
            }
        });
    }

    ngOnInit(): void {
        this.getRankingToNavigate();
        this.mostVoted(this.whatRanking, this.needPercentaje);
    }
    ngOnDestroy(): void {
        //removing custom subscription
        if (this.myCustomSubscription) {
            this.myCustomSubscription.unsubscribe();
        }
    }
    getRankingToNavigate() {
        this.activatedRoute.params.subscribe((param: Params) => {
            this.whatRanking = param.whatZone;
        });
    }
    mostVoted(whatRanking: string, addPercentaje: boolean) {
        this.ranking = this.controlRankingService.getTopFiveRanking(whatRanking, addPercentaje);
    }
    navigateToRankingStatistics(rankingView: string) {
        this.router.navigate([`/${rankingView}/${this.whatRanking}`]);
    }
}


