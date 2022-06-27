import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<ul>
    <li *ngFor="let item of items | async">
      {{ item.name }}
    </li>
  </ul>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'angular-firebase-2';
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
}
