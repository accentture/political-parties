import { TestBed } from '@angular/core/testing';

import { HashTablesManagerByZoneService } from './hash-tables-manager-by-zone.service';

describe('HashTablesManagerService', () => {
    let service: HashTablesManagerByZoneService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HashTablesManagerByZoneService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
