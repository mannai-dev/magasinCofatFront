import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Constants } from '../config/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storageService : StorageService, private router : Router,private authService:AuthService, private http: HttpClient,private config: Constants){}
  refresh=false
  addHttpOption =  new HttpHeaders({
    "No-Auth":"True"
  })
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storageService.getToken();
    if(req.headers.get("No-Auth")==='True'){
      return next.handle(req.clone());
    }



    let request=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      }
    )

    return next.handle(request).pipe(
      catchError(
        (err:HttpErrorResponse)=>{
          if(err.status===401){

                this.router.navigate(['/login'])

                return throwError("Something is wrong")
          
          }else if(err.status===403){
            this.router.navigate(['/404'])
          }else {
            this.router.navigate(['/login'])

            return throwError("Something is wrong")
          }
          return throwError("Something is wrong")
        }
      )
    );

  }
}
