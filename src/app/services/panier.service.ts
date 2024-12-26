import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environnement';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = `${environment.apiUrl}`;
   
  constructor(private http: HttpClient) {}

  
  addToCart(produitId: number, quantite: number): Observable<any> {
    const token = localStorage.getItem('token'); // Récupérer le token JWT du stockage local
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(
      `${this.apiUrl}/PanierProduit/AddToPanier/${produitId}/${quantite}`,
      null,
      { headers }
    );
  }
}
