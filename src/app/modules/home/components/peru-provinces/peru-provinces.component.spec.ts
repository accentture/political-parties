import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruProvincesComponent } from './peru-provinces.component';

describe('PeruProvincesComponent', () => {
  let component: PeruProvincesComponent;
  let fixture: ComponentFixture<PeruProvincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruProvincesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
