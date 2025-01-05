// location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://ipapi.co/json';

  constructor(private http: HttpClient) {}

  getCountryCode(): Observable<string> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.country_code),
      catchError(error => {
        console.error('Error fetching location data:', error);
        return of('US'); // Default to US if there's an error
      })
    );
  }
  getCountryData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/getCountryData').pipe(
      catchError(error => {
        console.error('Error fetching country data', error);
        return throwError(error);
      })
    );
  }
  

  getCurrencyByCountryCode(countryCode: string): string {
    const currencyMap: { [key: string]: string } = {
      'US': 'USD',
      'GB': 'GBP',
      'AU': 'AUD',
      'JP': 'JPY',
      // more country and currency mappings
    };
    return currencyMap[countryCode] || 'USD'; // Default to USD
  }
}
