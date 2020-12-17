import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoInfoComponent } from './diagnostico-info.component';

describe('DiagnosticoInfoComponent', () => {
  let component: DiagnosticoInfoComponent;
  let fixture: ComponentFixture<DiagnosticoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
