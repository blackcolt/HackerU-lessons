import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() text: string = ""
  @Input() date: string = ""
  @Input() id: number = 0
  @Input() isDone: boolean = false
  @Output() markDoneInChild: EventEmitter<number> = new EventEmitter();
  
  toggleDoneInChild(){
    this.isDone = !this.isDone
    this.markDoneInChild.emit(this.id)
  }
}
