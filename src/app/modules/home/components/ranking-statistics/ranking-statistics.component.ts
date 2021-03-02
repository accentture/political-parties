import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ControlRankingService } from './../../../../core/services/electoral-data/control-ranking.service';
import { RankingCandidatesComponent } from './../ranking-candidates/ranking-candidates.component';

@Component({
    selector: 'app-ranking-statistics',
    templateUrl: './ranking-statistics.component.html',
    styleUrls: ['./ranking-statistics.component.scss'],
    providers: [ControlRankingService],
    animations: [
        trigger('growBar', [
            state(
                'long',
                style({
                    height: '*',
                })
            ),
            transition('* => long', [style({ height: 0 }), animate('1.5s 1s ease-in')]),
        ]),
    ],
})
export class RankingStatisticsComponent extends RankingCandidatesComponent implements OnInit {
    animate: string = 'long';
    router: any;
    needPercentaje: boolean = false; //it evit add percentaje
    totalvotes: number;

    ngOnInit(): void {
        this.getRankingToNavigate();
        this.mostVoted(this.whatRanking, this.needPercentaje);
        this.addHeightForBox();
        this.totalvotes = this.controlRankingService.totalVotes;
    }

    //getting zone from direction bar
    getRankingToNavigate() {
        this.activatedRoute.params.subscribe((param: Params) => {
            this.whatRanking = param.whatRanking;
        });
    }
    addHeightForBox() {
        let percentOfcandidate: number,
            indexOfPercent: number = 2,
            heightForBox: number,
            indexForHeight: number = 3;

        for (let candidate = 0; candidate < this.ranking.length; candidate++) {
            percentOfcandidate = this.ranking[candidate][indexOfPercent];
            heightForBox = this.computeHeightOfBox(percentOfcandidate); //calculate height for size of box

            this.ranking[candidate][indexForHeight] = heightForBox.toFixed(1);
        }
    }
    computeHeightOfBox(percentaje: number) {
        const maxHeight: number = 395;
        return (percentaje * maxHeight) / 100; //compute thought rule of 3 simple
    }
    goToAddMoreVotes() {
        this.router.navigate([`/listCandidates/${this.whatRanking}`]);
    }
}
