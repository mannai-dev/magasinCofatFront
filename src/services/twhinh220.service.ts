import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Twhinh220 } from '../models/twhinh220';

@Injectable({
  providedIn: 'root'
})
export class Twhinh220Service {
private twhinh220Url: string;
  constructor(private http: HttpClient) {
    this.twhinh220Url = environment.baseUrl + 'twhinh220120';
   }
   public getAllTwhinh204(): Observable<Twhinh220[]> {
    return this.http.get<Twhinh220[]>(`${this.twhinh220Url}`+'/list');
  }
  addTwhinh204(twhinh220: Twhinh220): Observable<void> {
    return this.http.post<void>(`${this.twhinh220Url}/add`, twhinh220);
  }
 
}
