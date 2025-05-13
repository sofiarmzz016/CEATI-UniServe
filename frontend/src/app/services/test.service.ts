import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  private apiUrl = 'http://localhost:5000/api/test';

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test-get`);
  }

  post(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/test-post`, data);
  }

  put(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/test-put`, data);
  }

  patch(data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/test-patch`, data);
  }

  delete(params: any = {}): Observable<any> {
    return this.http.delete(`${this.apiUrl}/test-delete`, { params });
  }

  options(): Observable<any> {
    return this.http.options(`${this.apiUrl}/test-options`);
  }

  head(): Observable<any> {
    return this.http.head(`${this.apiUrl}/test-head`);
  }
}
