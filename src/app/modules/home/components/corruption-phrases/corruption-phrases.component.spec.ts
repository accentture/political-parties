import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruptionPhrasesComponent } from './corruption-phrases.component';

describe('CorruptionPhrasesComponent', () => {
  let component: CorruptionPhrasesComponent;
  let fixture: ComponentFixture<CorruptionPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorruptionPhrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorruptionPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
