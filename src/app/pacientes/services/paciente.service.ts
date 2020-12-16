import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Paciente from 'src/app/shared/models/paciente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  url = `${environment.apiUrl}${environment.endpoints.pacientes}`;
  constructor(private httpClient: HttpClient) {
    console.log('Servicio paciente iniciado');
  }

  getPacientes() {
    return this.httpClient.get<Paciente[]>(this.url);
  }
}
