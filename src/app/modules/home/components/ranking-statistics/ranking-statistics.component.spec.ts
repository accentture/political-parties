import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingStatisticsComponent } from './ranking-statistics.component';

describe('RankingStatisticsComponent', () => {
  let component: RankingStatisticsComponent;
  let fixture: ComponentFixture<RankingStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
