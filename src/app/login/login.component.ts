import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.usernamePlaceholder == 'ravi' && this.passwordPlaceholder == 'shubhashini') {
      this.isError=false
      this.router.navigate(['welcome',this.usernamePlaceholder])
    } else {
      this.isError=true
    }
  }
}
