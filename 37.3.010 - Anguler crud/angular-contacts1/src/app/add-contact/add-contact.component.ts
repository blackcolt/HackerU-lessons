import { Component, Input } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  addContact(name: HTMLInputElement, phone: HTMLInputElement, nickname?: HTMLInputElement){
    let contact = {name: name.value, phone: phone.value, nickname: nickname?.value } as Contact;
    this.service.addContact(contact);
    phone.value  = name.value = "" 
  }
  constructor(private service: ContactService) {}
}
