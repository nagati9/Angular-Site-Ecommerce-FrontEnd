import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environnement';
import { Vetement } from '../models/vetement.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VetementService {
  private apiUrl = `${environment.apiUrl}/Produit/GetProduitParType`;

    constructor(private http: HttpClient) {}
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    getProduitsParType(type: number): Observable<Vetement[]> {
        return this.http.get<Vetement[]>(`${this.apiUrl}/${type}`);
    }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

}
