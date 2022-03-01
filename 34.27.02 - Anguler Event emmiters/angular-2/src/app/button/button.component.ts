import { ThisReceiver } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  count = 0;
  @Input() buttonText: string = "Button Text"
  @Input() limit: number = 0
  @Output() limitReched = new EventEmitter<number>();
// @Output() limitReched = Event
  buttonClicked(){
    if (this.limit === 0){
      this.buttonText = ''+(++this.count)
    } 
     if(this.limit > this.count){
      this.buttonText = ''+(++this.count)
    } else {
      this.limitReched.emit(this.limit);
    }
  }
}

