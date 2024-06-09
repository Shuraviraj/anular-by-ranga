import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    if (username === 'ravi' && password === 'shubhashini') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }
}
