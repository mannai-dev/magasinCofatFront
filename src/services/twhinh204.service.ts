import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Twhinh204 } from '../models/twhinh204';

@Injectable({
  providedIn: 'root'
})
export class Twhinh204Service {
  private twhinh204Url: string;
  constructor(private http: HttpClient) {
    this.twhinh204Url = environment.baseUrl + 'twhinh204120';
   }
   public getAllTwhinh204(): Observable<Twhinh204[]> {
    return this.http.get<Twhinh204[]>(`${this.twhinh204Url}`+'/list');
  }
  addTwhinh204(twhinh204: Twhinh204): Observable<void> {
    return this.http.post<void>(`${this.twhinh204Url}/add`, twhinh204);
  }
  nextTwhinh204(): Observable<void> {
    return this.http.get<void>(`${this.twhinh204Url}/next`);
  }
}
