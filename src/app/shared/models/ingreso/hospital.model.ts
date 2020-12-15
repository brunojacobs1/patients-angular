import BaseIngreso from './ingreso.model';

interface Descarga {
  fecha: string;
  criterio: string;
}

export default interface IngresoHospital extends BaseIngreso {
  tipo: 'Hospital';
  criterio: Descarga;
}
