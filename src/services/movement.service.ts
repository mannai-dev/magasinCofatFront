import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Movement } from '../models/movement'

@Injectable({
  providedIn: 'root'
})
export class MovementService {
 private movementUrl: string;
  constructor(private http: HttpClient) {
    this.movementUrl = environment.baseUrl + 'movements';
   }
   public getAllMovements(): Observable<Movement[]> {
    return this.http.get<Movement[]>(`${this.movementUrl}`+'/list');
  }
  getMovementById(id: number): Observable<Movement> {
    return this.http.get<Movement>(`${this.movementUrl}/find/${id}`);
  }
}
