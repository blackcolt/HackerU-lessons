import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contac';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  contact: Contact = new Contact('', '');
  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contact =
        this.contactsService.getContactsBy(id) ?? new Contact('', '');
    }
  }
}
