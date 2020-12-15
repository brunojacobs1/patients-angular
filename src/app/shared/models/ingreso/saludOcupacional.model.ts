import BaseIngreso from './ingreso.model';

interface BajaPorEnfermedad {
  fechaInicio: string;
  fechaFin: string;
}

export default interface IngresoSaludOcupacional extends BaseIngreso {
  tipo: 'SaludOcupacional';
  nombreEmpleador: string;
  bajaPorEnfermedad?: BajaPorEnfermedad;
}
