import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact('', '', '', false, new Date());
  constructor(
    private contacsService: ContactsService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addContact() {
    debugger;
    this.contacsService.addContact(this.contact);
    this.router.navigate(['..']);
  }
}
