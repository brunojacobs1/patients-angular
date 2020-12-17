import Diagnostico from '../diagnostico.model';
import IngresoChequeo from './chequeo.model';
import IngresoHospital from './hospital.model';
import IngresoSaludOcupacional from './saludOcupacional.model';

export default interface BaseIngreso {
  id: string;
  descripcion: string;
  fecha: string;
  especialista: string;
  diagnosisCodes?: Array<Diagnostico['codigo']>;
}

export type Ingreso =
  | IngresoHospital
  | IngresoChequeo
  | IngresoSaludOcupacional;
