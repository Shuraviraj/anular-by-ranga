import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usernamePlaceholder: string = '';
  passwordPlaceholder: string = '';
  errorMessage = 'Invalid Credential';
  isError = false;

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.usernamePlaceholder,
        this.passwordPlaceholder
      )
    ) {
      this.isError = false;
      this.router.navigate(['welcome', this.usernamePlaceholder]);
    } else {
      this.isError = true;
    }
  }

  private isSessionStored(key : string, value : string) : boolean {
    console.log("sessionStorage is already set " + key);
    return sessionStorage.getItem(key) == value;
  }
 }
