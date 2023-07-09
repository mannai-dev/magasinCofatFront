import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted = false;
  username="";
  password="";
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;

  constructor( private formBuilder: FormBuilder,
    private authService: AuthService,
    private router :Router,
    private storageService: StorageService,) { }

  postLoginForm() {
    this.submitted=true
    if ( this.username==""){this.errorMessage = "username and password are required";}
    else if( this.password==""){this.errorMessage = "username and password are required";}else{

      this.authService.login({username:this.username,password:this.password}).subscribe({
        next: (apiReponse) => {
          this.submitted = true;
          this.storageService.saveToken(apiReponse.accessToken);
          this.storageService.saveRoles(apiReponse.user.role);
          this.storageService.saveUser(apiReponse.user);
          this.isLoggedIn = true;

          this.router.navigate(['/'])
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        },
      });
    }

  }
}
