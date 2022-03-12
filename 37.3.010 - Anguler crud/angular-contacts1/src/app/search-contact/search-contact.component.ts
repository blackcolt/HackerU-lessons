import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service'
@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent {
  constructor(private service: ContactService) { }
  search(event: any){
    this.service.filterContact(event.target.value)
  }
}
