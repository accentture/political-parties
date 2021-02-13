import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCandidateComponent } from './information-candidate.component';

describe('InformationCandidateComponent', () => {
  let component: InformationCandidateComponent;
  let fixture: ComponentFixture<InformationCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
