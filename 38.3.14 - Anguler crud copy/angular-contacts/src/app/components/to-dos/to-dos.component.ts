import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service'; 
import { Todo } from 'src/app/interfaces/todo'; 

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent {
  search: number = 0
  isDone: boolean = false
  todos: Todo[]
  doSomething(){
    console.log(this.search);
  }
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    setTimeout(() =>{
      this.isDone = true
    }, 5000)
  }
}
