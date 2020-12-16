import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListaPageComponent } from './pages/lista-page/pacientes-lista-page.component';
import { MatCardModule } from '@angular/material/card';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PacienteService } from './services/paciente.service';

@NgModule({
  declarations: [PacientesListaPageComponent, PacienteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [PacientesListaPageComponent, PacienteComponent],
  providers: [PacienteService],
})
export class PacientesModule {}
