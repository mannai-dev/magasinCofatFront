import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Constants } from '../config/constant';
import {User} from '../../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  addHttpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    }),
  };

  constructor(private http: HttpClient, private config: Constants) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.config.API_USER + 'getall',this.addHttpOption)
  }
  getCountUsers(): Observable<any> {
    return this.http.get<any>(this.config.API_USER + 'getCountUsers',this.addHttpOption)
  }
  getCountUsersEnabled(): Observable<any> {
    return this.http.get<any>(this.config.API_USER + 'getCountUsersEnabled',this.addHttpOption)
  }
  get(id: any): Observable<User> {
    return this.http.get<User>(`${this.config.API_USER}getById?id=${id}`,this.addHttpOption)
  }

  create(id: any, data: any): Observable<any> {
    return this.http.post<any>(this.config.API_USER + 'add?authId=' + id, data,this.addHttpOption)
  }

  update(id: any, data: any,authId:any): Observable<any> {
    return this.http.put<any>(`${this.config.API_USER}update?id=${id}&authId=${authId}`, data,this.addHttpOption)
  }
}
