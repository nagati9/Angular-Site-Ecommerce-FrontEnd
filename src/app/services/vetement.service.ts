import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environnement';
import { Vetement } from '../models/vetement.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VetementService {
 private apiUrl = `${environment.apiUrl}/Vetements`;

    constructor(private http: HttpClient) {}

    getSkincare(): Observable<Vetement[]> {
        return this.http.get<Vetement[]>(this.apiUrl);
    }
}
