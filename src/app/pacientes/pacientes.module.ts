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
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatExpansionModule,
  ],
  exports: [
    PacientesListaPageComponent,
    PacienteComponent,
    PacienteInfoComponent,
  ],
  providers: [PacienteService],
})
export class PacientesModule {}
