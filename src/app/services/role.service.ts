import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, Subject, catchError, retry } from 'rxjs';
import { Constants } from '../config/constant';
import { Role } from "../../models/role";
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  addHttpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    }),
  };

  constructor(private http: HttpClient, private config: Constants) {}

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.config.API_Role + 'getall',this.addHttpOption)
  }
  get(id: any): Observable<Role> {
    return this.http.get<Role>(`${this.config.API_Role}getById?id=${id}`,this.addHttpOption)
  }
  create(id: any, data: any): Observable<any> {
    return this.http.post<any>(this.config.API_Role + 'add', data,this.addHttpOption)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.config.API_Role}update?id=${id}`, data,this.addHttpOption)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.config.API_Role}delete?id=${id}`,this.addHttpOption)
  }
}
