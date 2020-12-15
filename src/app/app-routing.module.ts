import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticosListaPageComponent } from './diagnosticos/pages/lista-page/diagnosticos-lista-page.component';
import { PacientesListaPageComponent } from './pacientes/pages/lista-page/pacientes-lista-page.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesListaPageComponent },
  { path: 'diagnosticos', component: DiagnosticosListaPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pacientes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
