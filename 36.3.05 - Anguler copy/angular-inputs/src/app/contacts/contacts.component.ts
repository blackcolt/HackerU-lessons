import { Component, OnInit } from '@angular/core';
import { Contact } from './contact'
import { ContactService } from '../services/contact.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = []
  constructor(private service: ContactService) { 
   this.contacts = service.getContacts()
  }

  ngOnInit(): void {
  }

}
