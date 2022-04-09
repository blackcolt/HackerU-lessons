import { Injectable } from '@angular/core';
import { Contact } from '../contacts/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 private _contacts: Contact[] = [{
    name: "idan",
    lastname: "aaa",
    phone: "0910293",
    age:123123,
    tags: ["best friend", 'family']
  }]
  addContact(contact: Contact){
    this._contacts.push(contact)
  }
  addContacts(contacts: Contact[]){
    this._contacts.push(...contacts)
  }
  getContacts():Contact[]{
    return this._contacts
  }
  getContactByName(name: string): Contact | undefined{
    return this._contacts.find(contact=>contact.name === name)
  }

  getContactsWithTageNames(tagName:string){
    return this._contacts.map(contact=>contact.tags.includes(tagName))
  }
}
