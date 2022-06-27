import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/classes/weather';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent {
  weathers$: Observable<any[]>;
  // constructor(firestore: Firestore) {
  //   const collection = collection(firestore, 'items');
  //   this.item$ = collectionData(collection);
  // }

  constructor(firestore: Firestore) {
    const collectio = collection(firestore, 'weather');
    debugger;
    this.weathers$ = collectionData(collectio);
  }
}
