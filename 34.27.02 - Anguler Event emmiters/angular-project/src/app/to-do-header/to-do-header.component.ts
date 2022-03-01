import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-header',
  templateUrl: './to-do-header.component.html',
  styleUrls: ['./to-do-header.component.css']
})
export class ToDoHeaderComponent {
  @Input() title: string = "TO-DO"
  constructor() { 
    if (this.title.length > 3){
      this.title = "To long"
    }
  }
}
