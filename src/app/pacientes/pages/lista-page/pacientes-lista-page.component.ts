import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import Paciente, { NuevoPaciente } from 'src/app/shared/models/paciente.model';
import { AddPacienteComponent } from '../../components/add-paciente/add-paciente.component';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes-lista-page',
  templateUrl: './pacientes-lista-page.component.html',
  styleUrls: ['./pacientes-lista-page.component.css'],
})
export class PacientesListaPageComponent implements OnInit {
  pacientes$ = new Observable<Paciente[]>();
  pacientes: Paciente[];
  nuevoPaciente: NuevoPaciente;
  constructor(
    private pacienteService: PacienteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.getPacientes();
  }

  ngOnInit(): void {}

  getPacientes() {
    this.pacientes$ = this.pacienteService.getPacientes();
    this.pacientes$.subscribe((pacientes) => {
      this.pacientes = pacientes;
      console.log(this.pacientes);
    });
  }

  addPaciente() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.nuevoPaciente;

    const dialogRef = this.dialog.open(AddPacienteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((value: NuevoPaciente) => {
      if (value) {
        const nuevoPaciente = {
          ...value,
          fechaDeNacimiento: this.pacienteService.formatearFecha(
            value.fechaDeNacimiento
          ),
          ingresos: [],
        };
        this.pacienteService.addPaciente(nuevoPaciente).subscribe(
          (res) => {
            this.openSnackbar('Paciente agregado!');
            this.getPacientes();
          },
          (err) => {
            this.openSnackbar('Error al agregar paciente');
          }
        );
        console.log(nuevoPaciente);
      }
    });
  }

  openSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'OK', {
      duration: 5000,
    });
  }

  deletePaciente(pacienteId: string) {
    this.pacienteService.deletePaciente(pacienteId).subscribe(
      (res) => {
        this.openSnackbar('Paciente eliminado!');
        this.getPacientes();
      },
      (err) => {
        this.openSnackbar('Error al eliminar paciente');
      }
    );
  }
}
