import { Component, Input } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact: Contact = <Contact>({})
  constructor() { }
}
