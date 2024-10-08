import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DroneDataService {
  constructor(private http: HttpClient) {}

  getDroneData(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/data');
  }

  postUserQuery(query: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/query', { query });
  }
}
