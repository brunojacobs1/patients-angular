import { Component, Input, OnInit } from '@angular/core';
import IngresoSaludOcupacional from 'src/app/shared/models/ingreso/saludOcupacional.model';

@Component({
  selector: 'app-ingreso-so',
  templateUrl: './ingreso-so.component.html',
  styleUrls: ['./ingreso-so.component.css'],
})
export class IngresoSOComponent implements OnInit {
  @Input() ingreso: IngresoSaludOcupacional;
  constructor() {}

  ngOnInit(): void {}
}
