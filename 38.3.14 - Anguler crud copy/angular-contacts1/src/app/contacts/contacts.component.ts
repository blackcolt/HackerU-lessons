import { Component } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Contact[] = [];
  constructor(private service: ContactService) { 
    this.contacts = service.getContacts()
  }
}
