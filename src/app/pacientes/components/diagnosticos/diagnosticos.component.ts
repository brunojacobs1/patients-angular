import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css'],
})
export class DiagnosticosComponent implements OnInit {
  @Input() diagnosisCodes: string[];
  constructor() {}

  ngOnInit(): void {}
}
