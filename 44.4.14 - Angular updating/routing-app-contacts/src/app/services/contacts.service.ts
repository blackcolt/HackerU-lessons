import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [];
  constructor() {
    let contact = new Contact('1', 'moshe', '0526654211', true, new Date());
    let contact1 = new Contact('2', 'moshe', '0526654211', false, new Date());
    let contact2 = new Contact('3', 'moshe', '0526654211', false, new Date());
    this.contacts.push(contact, contact1, contact2);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactBy(id: string): Contact {
    return (
      this.contacts.find((contact) => contact.id === id) ??
      new Contact('', '', '', false, new Date())
    );
  }
  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
