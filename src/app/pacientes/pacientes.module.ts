import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListaPageComponent } from './pages/lista-page/pacientes-lista-page.component';
import { MatCardModule } from '@angular/material/card';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PacienteService } from './services/paciente.service';
import { PacienteInfoComponent } from './pages/paciente-info/paciente-info.component';
import { RouterModule } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IngresoHospitalComponent } from './components/ingreso-hospital/ingreso-hospital.component';
import { IngresoChequeoComponent } from './components/ingreso-chequeo/ingreso-chequeo.component';
import { IngresoSOComponent } from './components/ingreso-so/ingreso-so.component';
import { DiagnosticosComponent } from './components/diagnosticos/diagnosticos.component';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    PacientesListaPageComponent,
    PacienteComponent,
    PacienteInfoComponent,
    IngresoComponent,
    IngresoHospitalComponent,
    IngresoChequeoComponent,
    IngresoSOComponent,
    DiagnosticosComponent,
    AddPacienteComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  exports: [
    PacientesListaPageComponent,
    PacienteComponent,
    PacienteInfoComponent,
  ],
  providers: [PacienteService],
})
export class PacientesModule {}
