import { TestBed } from '@angular/core/testing';

import { InstagramAPIService } from './instagram-api.service';

describe('InstagramAPIService', () => {
    let service: InstagramAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InstagramAPIService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
