import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import Diagnostico from 'src/app/shared/models/diagnostico.model';
import { DiagnosticoService } from '../../services/diagnostico.service';

@Component({
  selector: 'app-diagnostico-info',
  templateUrl: './diagnostico-info.component.html',
  styleUrls: ['./diagnostico-info.component.css'],
})
export class DiagnosticoInfoComponent implements OnInit {
  diagnostico: Diagnostico;
  codigoParam$: Observable<string>;
  constructor(
    private diagnosticoService: DiagnosticoService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.codigoParam$ = this.activatedRoute.params.pipe(
      map<Params, string>((params) => params['codigo'].toString())
    );

    this.codigoParam$
      .pipe(
        mergeMap((codigo) => this.diagnosticoService.getDiagnostico(codigo))
      )
      .subscribe((diagnostico) => {
        this.diagnostico = diagnostico;
        console.log(this.diagnostico);
      });
  }

  ngOnInit(): void {}

  regresar() {
    this.location.back();
  }
}
