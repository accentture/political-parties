import { Injectable } from '@angular/core';
import { completeCandidate } from '../../models/complete-candidate';
import { CandidatesCongressmanService } from './candidates-congressman.service';
import { images } from './images';
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
    fullCandidatesWithImages(candidateCollection: any[]) {
        let counter = 0;
        for (let candidate in candidateCollection) {
            candidateCollection[candidate]['image'] = images[counter];
            counter++;
            if (images[counter] == undefined) {
                counter = 0;
            }
        }
    }
    getCandidates(zone: string) {
        if (zone == 'presidential') {
            this.fullCandidatesWithImages(this.candidatesPresidentialService);
            return this.candidatesPresidentialService;
        } else {
            this.fullCandidatesWithImages(this.candidatesCongressmanService.congressmanCandidateByZone(zone));
            return this.candidatesCongressmanService.congressmanCandidateByZone(zone);
        }
    }
}
