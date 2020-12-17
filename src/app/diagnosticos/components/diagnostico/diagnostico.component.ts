import { Component, Input, OnInit } from '@angular/core';
import Diagnostico from 'src/app/shared/models/diagnostico.model';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css'],
})
export class DiagnosticoComponent implements OnInit {
  @Input() diagnostico: Diagnostico;
  constructor() {}

  ngOnInit(): void {}
}
