import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticosListaPageComponent } from './diagnosticos/pages/lista-page/diagnosticos-lista-page.component';
import { PacientesModule } from './pacientes/pacientes.module';
import { PacientesListaPageComponent } from './pacientes/pages/lista-page/pacientes-lista-page.component';
import { PacienteInfoComponent } from './pacientes/pages/paciente-info/paciente-info.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesListaPageComponent },
  { path: 'diagnosticos', component: DiagnosticosListaPageComponent },
  { path: 'pacientes/:id', component: PacienteInfoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pacientes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PacientesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
