import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Diagnostico from 'src/app/shared/models/diagnostico.model';
import { DiagnosticoService } from '../../services/diagnostico.service';

@Component({
  selector: 'app-diagnosticos-lista-page',
  templateUrl: './diagnosticos-lista-page.component.html',
  styleUrls: ['./diagnosticos-lista-page.component.css'],
})
export class DiagnosticosListaPageComponent implements OnInit {
  diagnosticos$ = new Observable<Diagnostico[]>();
  diagnosticos: Diagnostico[];
  constructor(private diagnosticoService: DiagnosticoService) {
    this.getDiagnosticos();
  }

  ngOnInit(): void {}

  getDiagnosticos() {
    this.diagnosticos$ = this.diagnosticoService.getDiagnosticos();
    this.diagnosticos$.subscribe((diagnosticos) => {
      this.diagnosticos = diagnosticos;
      console.log(this.diagnosticos);
    });
  }
}
