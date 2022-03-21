import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  text = '12345'
  constructor() {
  setInterval(()=>{
    debugger
  // this.text = "4444444"
  }, 10000)
    // console.log(this.text)
  }
  getContact(){
    console.log(this.text)
  }

  ngOnInit(): void {
  }

}
