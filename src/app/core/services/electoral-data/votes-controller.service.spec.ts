import { TestBed } from '@angular/core/testing';

import { VotesControllerService } from './votes-controller.service';

describe('HashTableCollectionService', () => {
    let service: VotesControllerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VotesControllerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
