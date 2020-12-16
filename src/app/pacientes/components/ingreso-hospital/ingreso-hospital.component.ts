import { Component, Input, OnInit } from '@angular/core';
import IngresoHospital from 'src/app/shared/models/ingreso/hospital.model';

@Component({
  selector: 'app-ingreso-hospital',
  templateUrl: './ingreso-hospital.component.html',
  styleUrls: ['./ingreso-hospital.component.css'],
})
export class IngresoHospitalComponent implements OnInit {
  @Input() ingreso: IngresoHospital;
  constructor() {}

  ngOnInit(): void {}
}
