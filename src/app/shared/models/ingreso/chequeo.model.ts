import BaseIngreso from './ingreso.model';

export enum RatingChequeo {
  'Saludable' = 0,
  'Riesgo bajo' = 1,
  'Riesgo alto' = 2,
  'Riesgo critico' = 3,
}

export default interface IngresoChequeo extends BaseIngreso {
  tipo: 'Chequeo';
  chequeoRating: number;
}
