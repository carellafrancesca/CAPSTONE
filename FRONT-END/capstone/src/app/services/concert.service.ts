import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IConcertData } from '../interfaces/iconcert-data';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  private baseUrl = 'http://localhost:8080/api/concerts/';

  constructor(private http: HttpClient) {}

  getConcertsByLocation(location: string): Observable<IConcertData[]> {
    const url = this.baseUrl + 'byLocation/' + location;
    return this.http.get<IConcertData[]>(url);
  }
}
