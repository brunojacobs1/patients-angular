import { Component, Input, OnInit } from '@angular/core';
import IngresoChequeo, {
  RatingChequeo,
} from 'src/app/shared/models/ingreso/chequeo.model';

@Component({
  selector: 'app-ingreso-chequeo',
  templateUrl: './ingreso-chequeo.component.html',
  styleUrls: ['./ingreso-chequeo.component.css'],
})
export class IngresoChequeoComponent implements OnInit {
  @Input() ingreso: IngresoChequeo;
  constructor() {}

  ngOnInit(): void {}

  get ratingSalud() {
    return (this.ingreso && RatingChequeo[this.ingreso?.chequeoRating]) ?? null;
  }
}
