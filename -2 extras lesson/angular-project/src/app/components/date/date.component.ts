import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styles: [
    `.date {
      background-color: red;
    }`]
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
