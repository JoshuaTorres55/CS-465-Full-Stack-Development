import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  // This URL endpoint targets your live Express API backend
  private apiBaseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  // 1. Fetches all existing vacation records from your database
  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  // 2. NEW: Sends a POST request to create a brand new vacation package in the database
  public addTrip(formData: Trip): Observable<Trip> {
    // Swapped 'this.url' to 'this.apiBaseUrl' to match your variable above!
    return this.http.post<Trip>(this.apiBaseUrl, formData);
  }
}