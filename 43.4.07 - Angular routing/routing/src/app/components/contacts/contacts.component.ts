import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[] = [];
  constructor() {
    let contact = new Contact('idan', '0526651266');
    let contact1 = new Contact('snir', '0526281514');
    let contact2 = new Contact('yarin', '0526151265');
    this.contacts.push(contact);
    this.contacts.push(contact1);
    this.contacts.push(contact2);
  }
}
