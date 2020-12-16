import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSOComponent } from './ingreso-so.component';

describe('IngresoSOComponent', () => {
  let component: IngresoSOComponent;
  let fixture: ComponentFixture<IngresoSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoSOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
