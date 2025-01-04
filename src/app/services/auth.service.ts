import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environnement';
import { catchError, map, tap } from 'rxjs/operators';
import { Profil } from '../models/Profil.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private apiUrl = `${environment.apiUrl}`;
  private userSubject = new BehaviorSubject<string | null>(localStorage.getItem('userName'));
  currentUser$ = this.userSubject.asObservable();

  // Définition correcte de isOnline$
  isOnline$ = this.currentUser$.pipe(map((userName) => !!userName));

  constructor(private http: HttpClient) {}
  getProfil(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return  this.http.get<Profil>(`${this.apiUrl}/Auth/Get-Profile`, { headers })
  }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/signup`, user);
  }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string; userName: string }>(`${this.apiUrl}/Auth/signin`, credentials).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.userName);
        this.userSubject.next(response.userName); // Mise à jour de l'état utilisateur
      })
    );
  }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ userName: string }>(`${this.apiUrl}/Auth/current-user`, { headers }).pipe(
      tap((user) => {
        this.userSubject.next(user.userName); // Met à jour le BehaviorSubject
      })
    );
  }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


    updateProfil(profilData: any): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
  
      return this.http.put(`${this.apiUrl}/Auth/update-profile`, profilData, { headers })
        .pipe(
          catchError(error => {
            console.error('Error during profile update:', error);
            return throwError(error);
          })
        );
    }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.userSubject.next(null); // Réinitialise l'état utilisateur
   
  }
  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    const url = `${this.apiUrl}/Auth/change-password`; // Assure-toi que l'URL est correcte
    return this.http.post(url, { oldPassword, newPassword }, { headers }).pipe(
      tap(response => {
        console.log('Password change successful');
      }),
      catchError(error => {
        console.error('Error changing password', error);
        return throwError(error);
      })
    );
  } 
}
