import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruDepartmentsComponent } from './peru-departments-congressman.component';

describe('PeruDepartmentsComponent', () => {
  let component: PeruDepartmentsComponent;
  let fixture: ComponentFixture<PeruDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
