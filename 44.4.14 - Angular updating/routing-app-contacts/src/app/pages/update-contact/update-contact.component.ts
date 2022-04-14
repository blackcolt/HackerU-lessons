import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss'],
})
export class UpdateContactComponent implements OnInit {
  contact: Contact = new Contact('', '', '', false, new Date());
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    let contactId = this.route.snapshot.paramMap.get('contactId');
    if (contactId) {
      this.contact = this.contactsService.getContactBy(contactId);
    }
  }

  ngOnInit(): void {}
}
