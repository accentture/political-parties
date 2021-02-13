import { Injectable } from '@angular/core';
import { completeCandidate } from '../../models/complete-candidate';
import { CandidatesCongressmanService } from './candidates-congressman.service';

//this service use candidatesServiceProvider
@Injectable({
    providedIn: 'root',
})
export class CandidatesService {
    constructor(
        //these dependecies are candidates obtained directly with getter
        private candidatesPresidentialService: completeCandidate[],
        private candidatesCongressmanService: CandidatesCongressmanService
    ) {}
    getCandidates(zone: string) {
        if (zone == 'presidential') {
            return this.candidatesPresidentialService;
        } else {
            return this.candidatesCongressmanService.congressmanCandidateByZone(zone);
        }
    }
}
