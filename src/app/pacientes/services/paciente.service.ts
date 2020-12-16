import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.url);
  }

  getPaciente(idPaciente: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.url}/${idPaciente}`);
  }

  calcularEdad(fechaDeNacimiento: string): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaDeNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDif = hoy.getMonth() - nacimiento.getMonth();
    if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
}
