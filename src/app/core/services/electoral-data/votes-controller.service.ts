import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HashTablesManagerByZoneService } from '../vote-manager/hash-tables-manager-by-zone.service';

@Injectable()

//votes controller use a coleccion of hash table
export class VotesControllerService {
    hashTableAssitent: object;
    //properties to control votes state in information component
    private updateVotesControl$ = new Subject<number>();

    constructor(private hashTablesManager: HashTablesManagerByZoneService) {
        this.hashTableAssitent = this.hashTablesManager.collectionTables; //getting hashTableCollection
    }

    checkIfExistHashTable(query: boolean, zone: string, candidate: string, size?: number) {
        if (query) {
            if (this.hashTableAssitent[zone] == undefined) {
                this.onlyCheckVotes();
            } else {
                this.queryHashTable(query, zone, candidate);
            }
        } else {
            //it creates hash table
            if (this.hashTableAssitent[zone] == undefined) {
                this.hashTablesManager.createHashTable(zone, size);
            }
        }
    }
    askForVotes(zone: string, candidate: string) {
        //askVotes method never creates hash hable
        const query: boolean = true;

        this.checkIfExistHashTable(query, zone, candidate);
    }
    //to send candidate's results, these date are got from information candidate component
    saveVote(zone: string, candidate: string, vote: number, size: number) {
        //only this method creates hash table
        const query: boolean = false; //to confirn query

        this.checkIfExistHashTable(query, zone, candidate, size);
        this.queryHashTable(query, zone, candidate, vote);
    }

    /* query the table */
    private queryHashTable(query: boolean, zone: string, candidate: string, votes?: number) {
        let indexOfvotes = 1,
            presidentialVotesState = this.hashTableAssitent[zone].getCandidate(candidate);

        //cheking if candidate exits in hash table
        if (presidentialVotesState == null) {
            if (query) {
                //checking if only ask for votes
                return this.onlyCheckVotes();
            } else {
                //save new votes
                presidentialVotesState = this.hashTableAssitent[zone].putCandidate(candidate, votes);

                this.updateVotesOnView(presidentialVotesState[indexOfvotes]);
            }

            //UPDATE number of votes
        } else {
            if (query) {
                //checking if only ask for votes
                return this.onlyCheckVotes(presidentialVotesState[indexOfvotes]);
            } else {
                //getting votes updated
                presidentialVotesState = this.hashTableAssitent[zone].updateVotes(candidate, votes);
                this.updateVotesOnView(presidentialVotesState[indexOfvotes]);
            }
        }
    }

    private onlyCheckVotes(votes?: number) {
        const noVotes: number = 0;

        if (votes) {
            this.updateVotesOnView(votes);
        } else {
            this.updateVotesOnView(noVotes);
        }
        return;
    }

    //update number of votes in view of ranking component
    private updateVotesOnView(votesState: number) {
        this.updateVotesControl$.next(votesState);
    }

    getVotesUpdated(): Observable<number> {
        return this.updateVotesControl$.asObservable();
    }
}
