import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environnement';
import { Parfum } from '../models/parfum.model';

@Injectable({
    providedIn: 'root'
})
export class ParfumService {
    private apiUrl = `${environment.apiUrl}/Parfums`;

    constructor(private http: HttpClient) {}

    getParfums(): Observable<Parfum[]> {
        return this.http.get<Parfum[]>(this.apiUrl);
    }
}
