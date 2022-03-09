import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  btnClicked(name:string, age: string, tz: String, isChekced: boolean){
    console.log(name, age, tz, isChekced)
  }

  ngOnInit(): void {
  }

}
