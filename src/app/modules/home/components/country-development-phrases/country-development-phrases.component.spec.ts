import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDevelopmentPhrasesComponent } from './country-development-phrases.component';

describe('CountryDevelopmentPhrasesComponent', () => {
  let component: CountryDevelopmentPhrasesComponent;
  let fixture: ComponentFixture<CountryDevelopmentPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDevelopmentPhrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDevelopmentPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
