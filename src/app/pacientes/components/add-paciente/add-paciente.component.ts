import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NuevoPaciente } from 'src/app/shared/models/paciente.model';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css'],
})
export class AddPacienteComponent implements OnInit {
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) nuevoPaciente: NuevoPaciente
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(nuevoPaciente?.nombre, Validators.required),
      fechaDeNacimiento: new FormControl(
        nuevoPaciente?.fechaDeNacimiento,
        Validators.required
      ),
      genero: new FormControl(nuevoPaciente?.genero, Validators.required),
      ocupacion: new FormControl(nuevoPaciente?.ocupacion, Validators.required),
    });
  }

  ngOnInit(): void {}

  guardar() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.value);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
