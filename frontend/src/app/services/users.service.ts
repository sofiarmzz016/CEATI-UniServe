import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl =
    'http://http://ceati-uniserve-production.up.railway.app/api/users';

  constructor(private http: HttpClient) {}

  // Registro
  register(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }

  // Login y guardar token
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.access_token);
      })
    );
  }

  // Obtener perfil del usuario autenticado
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }

  // Cerrar sesión (eliminar token)
  logout(): void {
    localStorage.removeItem('token');
  }
}
