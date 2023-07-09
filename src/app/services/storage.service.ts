import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';
const Role_KEY = 'auth-role';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
//logout
  clean(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any  {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
//  *******
  public saveRoles(roles: any): void {
    window.sessionStorage.removeItem(Role_KEY);
    window.sessionStorage.setItem(Role_KEY, JSON.stringify(roles));
  }

  public getRoles(): any {
    const roles = window.sessionStorage.getItem(Role_KEY);
    if (roles) {
      return JSON.parse(roles);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
