import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListaPageComponent } from './pages/lista-page/pacientes-lista-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PacientesListaPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [PacientesListaPageComponent],
})
export class PacientesModule {}
