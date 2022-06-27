import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0
  title = 'angular-2';
  click(event:MouseEvent){
    this.count++
  }
  limitRechedParent(){
    console.log('limit as reached')
  }
}
