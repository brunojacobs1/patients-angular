import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Paciente, { NuevoPaciente } from 'src/app/shared/models/paciente.model';
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

  addPaciente(nuevoPaciente: NuevoPaciente) {
    return this.httpClient.post<NuevoPaciente>(this.url, nuevoPaciente);
  }

  deletePaciente(idPaciente: string) {
    return this.httpClient.delete(`${this.url}/${idPaciente}`);
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

  formatearFecha(fechaDeNacimiento: any): string {
    const fecha = new Date(fechaDeNacimiento);
    let mes = '' + (fecha.getMonth() + 1);
    let dia = '' + fecha.getDate();
    const anio = fecha.getFullYear();

    if (mes.length < 2) mes = '0' + mes;
    if (dia.length < 2) dia = '0' + dia;

    return [anio, mes, dia].join('-');
  }
}
