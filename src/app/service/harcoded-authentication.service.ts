import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { 
  }

  authenticate(userName : string, password: string) : boolean {
    return (userName == "ravi" && password == "shubhashini") ? true : false;
  }
}
