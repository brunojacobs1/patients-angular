import { Component, Input, OnInit } from '@angular/core';
import Paciente, { Genero } from 'src/app/shared/models/paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  //@Input() paciente: Paciente;
  paciente: Paciente = {
    id: 'd2773336-f723-11e9-8f0b-362b9e155667',
    nombre: 'John McClane',
    fechaDeNacimiento: '1986-07-09',
    genero: Genero.Masculino,
    ocupacion: 'New york city cop',
    ingresos: [
      {
        id: 'd811e46d-70b3-4d90-b090-4535c7cf8fb1',
        fecha: '2015-01-02',
        tipo: 'Hospital',
        especialista: 'MD House',
        diagnosisCodes: ['S62.5'],
        descripcion:
          "Healing time appr. 2 weeks. patient doesn't remember how he got the injury.",
        descarga: {
          fecha: '2015-01-16',
          criterio: 'Thumb has healed.',
        },
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
