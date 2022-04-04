import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
  transform(number: number): number {
   return Math.sqrt(number);
  }
}
