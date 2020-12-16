import { Component, Input, OnInit } from '@angular/core';
import Paciente from '../../models/paciente.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //@Input() paciente: Paciente;
  constructor() {}

  ngOnInit(): void {}
}
