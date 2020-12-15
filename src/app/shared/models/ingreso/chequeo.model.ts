import BaseIngreso from './ingreso.model';

export enum RatingChequeo {
  Saludable = 0,
  BajoRiesgo = 1,
  AltoRiesgo = 2,
  RiesgoCritico = 3,
}

export default interface IngresoChequeo extends BaseIngreso {
  tipo: 'Chequeo';
  ratingChequeo: RatingChequeo;
}
