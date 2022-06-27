import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() name = "לא ידוע"
  @Input() price = 0
  @Output() productClicked= new EventEmitter<string>();
  pClick(){
    this.productClicked.emit(this.name)
  }
  ngOnInit(){ 
    if(this.price < 1){
      this.price =1
    }
  }
}
