import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-fill',
  templateUrl: './contact-fill.component.html',
  styleUrls: ['./contact-fill.component.scss'],
})
export class ContactFillComponent implements OnInit {
  @Input() contact: Contact = new Contact('', '', '', false, new Date());
  constructor() {}
  ngOnInit(): void {}
}
