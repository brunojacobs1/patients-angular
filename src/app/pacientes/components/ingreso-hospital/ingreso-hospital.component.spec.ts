import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoHospitalComponent } from './ingreso-hospital.component';

describe('IngresoHospitalComponent', () => {
  let component: IngresoHospitalComponent;
  let fixture: ComponentFixture<IngresoHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
