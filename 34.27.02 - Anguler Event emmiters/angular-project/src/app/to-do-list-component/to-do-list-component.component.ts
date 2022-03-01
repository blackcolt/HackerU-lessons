import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent {
  toDos = [
    {
      id:1,
      text: "DO A lot of HW",
      date: new Date(),
      isDone: false
    },
    {
      id:2,
      text: "DO A really really lot of HW",
      date: new Date(),
      isDone: true
    }
  ]
  markDoneInParent(id:number){
    console.log(id)
  }
}
