import { Component, Input, OnInit } from '@angular/core';
import Paciente from 'src/app/shared/models/paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  @Input() paciente: Paciente;
  constructor() {}

  ngOnInit(): void {}
}
