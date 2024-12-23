import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environnement';
import { Skincare } from '../models/skincare.model';
@Injectable({
    providedIn: 'root'
})
export class SkincareService {
    private apiUrl = `${environment.apiUrl}/Skincare`;

    constructor(private http: HttpClient) {}

    getSkincare(): Observable<Skincare[]> {
        return this.http.get<Skincare[]>(this.apiUrl);
    }
}
