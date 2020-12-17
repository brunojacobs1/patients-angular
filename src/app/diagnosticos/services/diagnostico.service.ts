import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Diagnostico from 'src/app/shared/models/diagnostico.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticoService {
  url = `${environment.apiUrl}${environment.endpoints.diagnosticos}`;
  constructor(private httpClient: HttpClient) {
    console.log('Servicio diagnostico iniciado');
  }

  getDiagnosticos(): Observable<Diagnostico[]> {
    return this.httpClient.get<Diagnostico[]>(this.url);
  }

  getDiagnostico(codigo: string): Observable<Diagnostico> {
    return this.httpClient.get<Diagnostico>(`${this.url}/${codigo}`);
  }
}
