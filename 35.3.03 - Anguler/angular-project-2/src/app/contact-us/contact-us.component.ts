import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @Output() somethingHappend = new EventEmitter<void>()
  contactClicked(){
    console.log(1111);
    this.somethingHappend.emit()
  }
}
