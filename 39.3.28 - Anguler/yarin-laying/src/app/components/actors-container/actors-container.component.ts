import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actors-container',
  templateUrl: './actors-container.component.html',
  styleUrls: ['./actors-container.component.scss']
})
export class ActorsContainerComponent {
  @Input() actores?: Actor[]
  constructor() { }
}
