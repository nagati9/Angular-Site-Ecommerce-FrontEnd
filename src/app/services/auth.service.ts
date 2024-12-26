import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environnement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}`;
  router: any;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/signup`, user);
  }
  
 
  
  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string; userName: string }>(`${this.apiUrl}/Auth/signin`, credentials);
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ userName: string }>(`${this.apiUrl}/Auth/current-user`, { headers });
  }

  
  logout(): void {
    // Supprimez le token et toutes les informations utilisateur du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');

    // Redirigez l'utilisateur vers la page de connexion ou d'accueil
   
    location.reload();
  }
  

}
