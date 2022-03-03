import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-presser',
  templateUrl: './presser.component.html',
  styleUrls: ['./presser.component.css']
})
export class PresserComponent implements OnInit {
  count = 0
  max = 10;
  @Output() limitReached = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  press(){
    if (this.count === this.max){
     this.limitReached.emit(this.max);
    } else{
      this.count ++
    }
  }

}
