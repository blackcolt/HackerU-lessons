import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  moreThenThreeClass = ['red', 'text-green'];
  @Input() index: number = 0;
  @Input() actor?: Actor;
  constructor() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // setInterval(()=>{
    //   if (this.moreThenThreeClass.length){
    //     this.moreThenThreeClass.pop()
    //   }
    // },3000)
   }
}
