import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Paciente from 'src/app/shared/models/paciente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  @Input() paciente: Paciente;
  @Output() eliminarPaciente = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  eliminar(pacienteId: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Seguro de que desea eliminar este paciente?',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((value) => {
      if (value.isConfirmed) {
        this.eliminarPaciente.emit(pacienteId);
      }
    });
  }
}
