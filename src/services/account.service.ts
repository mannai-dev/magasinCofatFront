import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from '../models/account';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountUrl: string;

  constructor(private http: HttpClient) {
    this.accountUrl = environment.baseUrl + 'account';
  }

  public getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.accountUrl}`+'/accounts');
  }
   }

