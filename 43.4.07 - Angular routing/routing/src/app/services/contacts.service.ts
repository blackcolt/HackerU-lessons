import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    new Contact('name', '092989823'),
    new Contact('name', '092989823'),
    new Contact('name', '092989823'),
    new Contact('name', '092989823'),
  ];
  getContacts() {
    // if (this.contacts.length < 1) {
    //   fetch('getContacts')
    //     .then((contacts) => contacts.json())
    //     .then((contacts) => (this.contacts = contacts));
    // }
    return this.contacts;
  }
  updateContacts(){
$.post()
  }
  constructor() {}
}
