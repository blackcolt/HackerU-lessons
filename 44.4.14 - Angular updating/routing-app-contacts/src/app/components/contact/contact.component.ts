import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact: Contact = new Contact('', '', '', false, new Date());
  constructor() {}
}
