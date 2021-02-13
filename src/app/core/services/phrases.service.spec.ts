import { TestBed } from '@angular/core/testing';

import { PhrasesService } from './phrase.service';

describe('PhraseService', () => {
    let service: PhrasesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PhrasesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
