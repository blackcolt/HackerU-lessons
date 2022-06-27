import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo'; 

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  @Input() toDo?: Todo
  constructor() {

  }
}
