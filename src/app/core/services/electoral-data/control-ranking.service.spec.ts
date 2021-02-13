import { TestBed } from '@angular/core/testing';

import { ControlRankingService } from './control-ranking.service';

describe('ControlRankingService', () => {
  let service: ControlRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
