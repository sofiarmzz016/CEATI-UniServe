import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://localhost:8000/api/'; // URL  backend Django

  constructor(private http: HttpClient) { }

  // Obtener servicios disponibles
  getServicios() {
    return this.http.get(`${this.apiUrl}servicios/`);
  }

  // Agendar nueva cita
  agendarCita(datos: any) {
    return this.http.post(`${this.apiUrl}agendar/`, datos);
  }
}