import { TestBed } from '@angular/core/testing';

import { PeruDepartmentsService } from './peru-departments.service';

describe('PeruDepartmentsService', () => {
  let service: PeruDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeruDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
