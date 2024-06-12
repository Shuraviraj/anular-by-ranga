import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    if (sessionStorage.getItem('authenticaterUser') != null) {
      return true;
    }
    if (username === 'ravi' && password === 'shubhashini') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean {
    return sessionStorage.getItem("authenticatedUser") != null;
  }

  logout() : void {
    sessionStorage.removeItem("authenticatedUser");
  }
}
