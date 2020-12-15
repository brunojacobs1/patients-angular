import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListaPageComponent } from './pages/lista-page/pacientes-lista-page.component';

@NgModule({
  declarations: [PacientesListaPageComponent],
  imports: [CommonModule],
  exports: [PacientesListaPageComponent],
})
export class PacientesModule {}
