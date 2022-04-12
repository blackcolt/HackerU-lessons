import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact: Contact = new Contact();
  isEditMode = false;
  constructor() {}
  toggleEditAndSave() {
    this.isEditMode = !this.isEditMode;
  }
}
