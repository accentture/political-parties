import { Injectable } from '@angular/core';
import { VotesMaxHeapManagerService } from '../vote-manager/votes-max-heaps-manager.service';
import { controlVotes } from '../../models/control-votes';
import { VotesMaxHeap } from './../../models/vote-manager/votes-max-heap.model';

@Injectable()
export class ControlRankingService {
    private zonesWithRanking: string[];
    private topRanking: any[] = [];
    private top: number = 3;
    private _totalVotes: number = 0;

    constructor(private maxHeapManager: VotesMaxHeapManagerService) {}
    createZones() {
        this.zonesWithRanking = this.maxHeapManager.getzones;
    }
    private createTopRanking(zone: string, createPercetaje: boolean) {
        let maxHeap: VotesMaxHeap = this.maxHeapManager.getMaxHeap(zone),
            candidate: any[];

        for (let x = 0; x < this.top; x++) {
            candidate = maxHeap.poll(); //using poll() method of

            if (candidate === undefined) {
                break;
            }
            this.topRanking.push(candidate);

            this._totalVotes += candidate[1]; //counting total votes
        }

        //checkig if votes in percentaje must be added to topRanking array
        if (createPercetaje) {
            this.createPercentajeOfVotes();
        }
    }
    private createPercentajeOfVotes() {
        let candidate: any[],
            votesByCandidate: number,
            percentaje: number,
            indexForPercentaje: number = 2;

        for (let x = 0; x < this.topRanking.length; x++) {
            candidate = this.topRanking[x];
            votesByCandidate = candidate[1]; //number of votes
            percentaje = (votesByCandidate * 100) / this._totalVotes; //using formula of percentaje

            percentaje = (parseFloat(percentaje.toFixed(1)) * 1000) / 1000;

            candidate[indexForPercentaje] = percentaje;
        }
    }
    fixProblemWithDecimals() {}
    get getZonesWithRanking() {
        this.createZones();
        return this.zonesWithRanking;
    }
    get totalVotes() {
        return this._totalVotes;
    }

    getTopFiveRanking(zone: string, createPercetaje: boolean) {
        this.createTopRanking(zone, createPercetaje);

        return this.topRanking;
    }
}
