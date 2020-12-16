import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoChequeoComponent } from './ingreso-chequeo.component';

describe('IngresoChequeoComponent', () => {
  let component: IngresoChequeoComponent;
  let fixture: ComponentFixture<IngresoChequeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoChequeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoChequeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
