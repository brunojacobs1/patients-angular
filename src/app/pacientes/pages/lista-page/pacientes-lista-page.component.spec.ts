import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesListaPageComponent } from './pacientes-lista-page.component';

describe('PacientesListaPageComponent', () => {
  let component: PacientesListaPageComponent;
  let fixture: ComponentFixture<PacientesListaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacientesListaPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesListaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
