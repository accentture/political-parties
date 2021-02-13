import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesWithVotesComponent } from './zones-with-votes.component';

describe('ZonesWithVotesComponent', () => {
  let component: ZonesWithVotesComponent;
  let fixture: ComponentFixture<ZonesWithVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonesWithVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesWithVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
