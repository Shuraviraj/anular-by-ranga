import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean = false,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn Spring Boot', false, new Date()),
    new Todo(3, 'Be an Angular ninja', false, new Date()),
    new Todo(4, 'Visit india', false, new Date()),
  ];

  constructor() {}

  ngOnInit(): void {}
}
