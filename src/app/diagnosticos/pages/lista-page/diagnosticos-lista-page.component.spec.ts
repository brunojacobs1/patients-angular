import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticosListaPageComponent } from './diagnosticos-lista-page.component';

describe('DiagnosticosListaPageComponent', () => {
  let component: DiagnosticosListaPageComponent;
  let fixture: ComponentFixture<DiagnosticosListaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosticosListaPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticosListaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
