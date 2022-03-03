import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  color = "yellow"
  contacts = [
    {name: 'idan', 'phone': '0526655454'},
    {name: 'asd', 'phone': '0526655454'},
    {name: 'ddff', 'phone': '0526655454'},
    {name: 'ffff', 'phone': '0526652454'},
    {name: 'aaa', 'phone': '0526635454'},
    {name: 'ss', 'phone': '0526655454'},
    {name: 'idddan', 'phone': '0526651454'},
  ]
  constructor() { 
    
  }
  toggleChanged(event: any){
    console.log(event)
  }
  ngOnInit(): void {
  }

}
