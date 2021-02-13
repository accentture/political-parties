import { CandidatesPresidentialService } from './canditates-presidential.service';
import { CandidatesCongressmanService } from './candidates-congressman.service';
import { CandidatesService } from './candidates.service';

const candidatesServiceFactory = (
    candidatesPresidentialService: CandidatesPresidentialService,
    candidatesCongressmanService: CandidatesCongressmanService
) => {
    return new CandidatesService(candidatesPresidentialService.presidentialCandidates, candidatesCongressmanService);
};

export let candidatesServiceProvider = {
    provide: CandidatesService,
    useFactory: candidatesServiceFactory,
    deps: [CandidatesPresidentialService, CandidatesCongressmanService],
};
  