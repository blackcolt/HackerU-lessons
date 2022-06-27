import { Injectable } from '@angular/core';
import { Contact } from '../classes/contac';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[];
  constructor() {
    this.contacts = [
      new Contact('idan', '0526651266', '1'),
      new Contact('lulu', '0526651266', '2'),
      new Contact('vica', '0526651266', '3'),
    ];
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  addContacts(contact: Contact) {
    this.contacts.push(contact);
  }
  getContactsBy(id: string): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }
  updateContact(id: string, contact: Contact) {
    let mContact = this.getContactsBy(id);
    mContact = contact;
  }
  deleteContact(id: string) {}
}
