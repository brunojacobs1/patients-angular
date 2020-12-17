import { Ingreso } from './ingreso/ingreso.model';

export default interface Paciente {
  id: string;
  nombre: string;
  fechaDeNacimiento: string;
  genero: Genero;
  ocupacion: string;
  ingresos: Ingreso[];
}

export interface NuevoPaciente {
  nombre: string;
  fechaDeNacimiento: string;
  genero: Genero;
  ocupacion: string;
  ingresos: Ingreso[];
}

export enum Genero {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Otro = 'Otro',
}
