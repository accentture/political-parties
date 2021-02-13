import { Injectable } from '@angular/core';
import { CongressmanCandidates } from '../../mocks/congressman-candidates';
import { completeCandidate } from '../../models/complete-candidate';
@Injectable({ providedIn: 'root' })
export class CandidatesCongressmanService {
    congressmanCandidateByZone(zone: string) {
        const candidates: Array<completeCandidate> = []; //candidates by zone

        for (let x = 0; x < CongressmanCandidates.length; x++) {
            //getting candidates by zone
            if (CongressmanCandidates[x]['Distrito Electoral'].toLowerCase() == zone) {
                candidates.push(CongressmanCandidates[x]);
            }
        }
        return candidates;
    }
}
