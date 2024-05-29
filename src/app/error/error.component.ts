import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errormessage = "Error Occurred call 911 for support"
  constructor() { }

  ngOnInit(): void {
  }

}
