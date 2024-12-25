import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environnement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/signup`, user);
  }
  login(credentials: { email: string; password: string }) {
    return this.http.post<{ userId: number; userName: string }>(
      'https://localhost:7249/api/Auth/signin',
      credentials
    );
  }
  
  getCurrentUser() {
    return this.http.get<{ userName: string }>('https://localhost:7249/api/Auth/current-user');
  }
  
  
  
  logout(): Observable<any> {
    return this.http.post('https://localhost:7249/api/Auth/logout', {});
  }
  

}
