import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Twhinh200 } from '../models/twhinh200';

@Injectable({
  providedIn: 'root'
})
export class Twhinh200Service {
  private twhinh200Url: string;
  constructor(private http: HttpClient) {
    this.twhinh200Url = environment.baseUrl + 'twhinh200120';
   }
   public getAllTwhinh200(): Observable<Twhinh200[]> {
    return this.http.get<Twhinh200[]>(`${this.twhinh200Url}`+'/list');
  }
  nextTwhinh200(): Observable<void> {
    return this.http.get<void>(`${this.twhinh200Url}/next`);
  }
  addTwhinh200(twhinh200: Twhinh200): Observable<void> {
    return this.http.post<void>(`${this.twhinh200Url}/add`, twhinh200);
  }
}
