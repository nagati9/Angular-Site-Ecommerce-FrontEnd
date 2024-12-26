import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environnement';
import { Parfum } from '../models/parfum.model';

@Injectable({
    providedIn: 'root'
})
export class ParfumService {
    private apiUrl = `${environment.apiUrl}/Produit/GetProduitParType`;

    constructor(private http: HttpClient) {}

    getProduitsParType(type: number): Observable<Parfum[]> {
        return this.http.get<Parfum[]>(`${this.apiUrl}/${type}`);
    }
}
