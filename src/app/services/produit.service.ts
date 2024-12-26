import { Injectable } from '@angular/core';
import { environment } from '../../environments/environnement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = `${environment.apiUrl}/Produit`;
  
      constructor(private http: HttpClient) {}
  
      getProduits(): Observable<Produit[]> {
          return this.http.get<Produit[]>(`${this.apiUrl}`);
      }
}
