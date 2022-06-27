import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maam'
})

export class MaamPipe implements PipeTransform {

  foo(param?: any){
    console.log(param)
  }

  fetchMaam(): number {
    return 1.17;
  }
  addMaam(num: number, maam: number): number{
    return num * maam;
  }
  transform(price: number): number {
    this.foo()
    return price > 0 ? this.addMaam(price, this.fetchMaam()) : 0
  }
}
