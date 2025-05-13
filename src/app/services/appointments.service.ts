import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private apiUrl = 'http://localhost:5000/api/appointments';

  constructor(private http: HttpClient) {}

  // Obtener citas disponibles de un tipo y fecha específicos
  getAvailableAppointments(date: string, type: string): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token JWT del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/occupied`, {
      headers,
      params: { date, type },
    });
  }

  // Agendar nueva cita
  agendarCita(datos: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token JWT del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/create`, datos, { headers });
  }

  // Obtener citas de un usuario específico
  getUserAppointments(userId: number): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token JWT del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/user/${userId}`, { headers });
  }

  // Borrar appointment
  deleteAppointment(appointmentId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/delete/${appointmentId}`, {
      headers,
    });
  }
}
