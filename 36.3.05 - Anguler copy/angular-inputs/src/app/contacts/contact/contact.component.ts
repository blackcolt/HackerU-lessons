import { Component, Input } from '@angular/core';
import { Contact } from '../contact'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  @Input() name: string = ""
  @Input() age: number = 0
  @Input() lastname: string = ""
  @Input() phone: string = ""
  @Input() tags: string[] = []

}
