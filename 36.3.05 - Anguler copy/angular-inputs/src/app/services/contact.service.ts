import { Injectable } from '@angular/core';
import { Contact } from '../contacts/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 private contacts: Contact[] = [{
    name: "idan",
    lastname: "aaa",
    phone: "0910293",
    age:123123,
    tags: ["best friend", 'family']
  }]
  getContacts():Contact[]{
    return this.contacts
  }
  getContactByName(name: string): Contact | undefined{
    return this.contacts.find(contact=>contact.name === name)
  }

  getContactsWithTageNames(tagName:string){
    return this.contacts.map(contact=>contact.tags.includes(tagName))
  }
  constructor() { 

  }
}
