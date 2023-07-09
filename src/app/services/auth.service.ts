import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../config/constant';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  addHttpOption =  new HttpHeaders({
    "No-Auth":"True"
  })
  constructor(
    private http: HttpClient,
    private config: Constants,
    private storageService: StorageService
  ) { }

  login(loginform : any): Observable<any> {
    return this.http.post<any>(
      this.config.API_AUTH + 'signin?userName='+loginform.username+'&password='+loginform.password,
      loginform,{headers:this.addHttpOption}
    );
  }

  logout(token:any): Observable<any> {
    return this.http.post<any>(
      this.config.API_AUTH + 'logout',token
      ,{headers:this.addHttpOption}
    );
  }
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.storageService.getRoles();
    if (userRoles != null && userRoles) {
    
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles.roleName == allowedRoles[j]) {
            isMatch = true;
          }
        
      }
    }
    return isMatch;
  }
}
