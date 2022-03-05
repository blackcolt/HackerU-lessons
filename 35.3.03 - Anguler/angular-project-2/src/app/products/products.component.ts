import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  sucessesMessage = ""
  products = [
    {name: 'ahla product',  price: 100},
  ]

  onLimitReached(limit?: number){
    this.sucessesMessage = `Yhayy you have reached limit of: ${limit}`
  }

  constructor(){
    console.log("on constructor")
    this.getDataFromServer();
  }
  ngOnInit(): void {
    console.log("on init")
  }
  productClickedMoshe(pName:string):void{
    this.products = this.products.filter((el) => el.name !=  pName); 
  }
  contactClicked(){
    console.log("someone pressed on my kid")
  }

  getDataFromServer(){
    // setTimeout(() =>{
      this.products = [
        {name: 'ahla product', price: -1},
        {name: 'ahla2 product2', price: 101},
        {name: 'ahla3 product2', price: 101},
        {name: 'ahla2 product2', price: 101},
        {name: 'ahla2 product2', price: 101},
        {name: 'ahla6 product2', price: 101},
        {name: 'ahla7 product2', price: 101},
      ]
    // }, 3000)
  }
}
