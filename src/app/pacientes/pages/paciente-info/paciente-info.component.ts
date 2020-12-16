import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import Paciente from 'src/app/shared/models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-info',
  templateUrl: './paciente-info.component.html',
  styleUrls: ['./paciente-info.component.css'],
})
export class PacienteInfoComponent implements OnInit {
  paciente: Paciente;
  idParam$: Observable<string>;
  constructor(
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute
  ) {
    this.idParam$ = this.activatedRoute.params.pipe(
      map<Params, string>((params) => params['id'].toString())
    );

    this.idParam$
      .pipe(mergeMap((id) => this.pacienteService.getPaciente(id)))
      .subscribe((paciente) => {
        this.paciente = paciente;
        console.log(this.paciente);
      });
  }

  ngOnInit(): void {}

  get edad(): number {
    return this.pacienteService.calcularEdad(this.paciente?.fechaDeNacimiento);
  }
}
