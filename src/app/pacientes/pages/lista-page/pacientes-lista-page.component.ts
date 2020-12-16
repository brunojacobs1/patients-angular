import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Paciente from 'src/app/shared/models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes-lista-page',
  templateUrl: './pacientes-lista-page.component.html',
  styleUrls: ['./pacientes-lista-page.component.css'],
})
export class PacientesListaPageComponent implements OnInit {
  pacientes$ = new Observable<Paciente[]>();
  pacientes: Paciente[];
  constructor(private pacienteService: PacienteService) {
    this.getPacientes();
  }

  ngOnInit(): void {}

  getPacientes() {
    this.pacientes$ = this.pacienteService.getPacientes();
    this.pacientes$.subscribe((pacientes) => {
      this.pacientes = pacientes;
      console.log(this.pacientes);
    });
  }
}
