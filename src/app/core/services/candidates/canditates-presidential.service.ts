import { Injectable } from '@angular/core';
import { PresidentialCandidates } from '../../mocks/presidential-candidates';

//parent class
@Injectable({ providedIn: 'root' })
export class CandidatesPresidentialService {
    get presidentialCandidates() {
        return PresidentialCandidates;
    }
}


