import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-wrapper',
  templateUrl: './contacts-wrapper.component.html',
  styleUrls: ['./contacts-wrapper.component.scss'],
})
export class ContactsWrapperComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getContacts();
  }

  ngOnInit(): void {}
}
