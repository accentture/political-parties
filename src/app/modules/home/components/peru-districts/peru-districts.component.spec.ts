import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruDistrictsComponent } from './peru-districts.component';

describe('PeruDistrictsComponent', () => {
  let component: PeruDistrictsComponent;
  let fixture: ComponentFixture<PeruDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruDistrictsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
