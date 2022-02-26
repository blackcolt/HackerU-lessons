import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-greeting',
  templateUrl: './user-greeting.component.html',
  styleUrls: ['./user-greeting.component.css']
})
export class UserGreetingComponent implements OnInit {
  @Input() userName = "user"
  constructor() { }
  ngOnInit(): void {
  }

}
