import { TestBed } from '@angular/core/testing';

import { VotesMaxHeapManagerService } from './votes-max-heaps-manager.service';

describe('HashTableCongressmanVotesService', () => {
    let service: VotesMaxHeapManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VotesMaxHeapManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
