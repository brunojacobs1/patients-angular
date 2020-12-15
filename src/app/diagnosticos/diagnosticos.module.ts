import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosticosListaPageComponent } from './pages/lista-page/diagnosticos-lista-page.component';

@NgModule({
  declarations: [DiagnosticosListaPageComponent],
  imports: [CommonModule],
  exports: [DiagnosticosListaPageComponent],
})
export class DiagnosticosModule {}
