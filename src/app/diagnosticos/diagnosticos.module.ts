import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosticosListaPageComponent } from './pages/lista-page/diagnosticos-lista-page.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { DiagnosticoService } from './services/diagnostico.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DiagnosticoInfoComponent } from './pages/diagnostico-info/diagnostico-info.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DiagnosticosListaPageComponent,
    DiagnosticoComponent,
    DiagnosticoInfoComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatButtonModule],
  exports: [DiagnosticosListaPageComponent],
  providers: [DiagnosticoService],
})
export class DiagnosticosModule {}
