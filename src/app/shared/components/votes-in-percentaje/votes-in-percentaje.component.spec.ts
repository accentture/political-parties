import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesInPercentajeComponent } from './votes-in-percentaje.component';

describe('VotesInPercentajeComponent', () => {
  let component: VotesInPercentajeComponent;
  let fixture: ComponentFixture<VotesInPercentajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesInPercentajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesInPercentajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
