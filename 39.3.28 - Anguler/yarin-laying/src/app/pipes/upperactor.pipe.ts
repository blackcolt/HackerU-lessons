import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperactor'
})
export class UpperactorPipe implements PipeTransform {

  transform(name?: string): string {
   return name?.toUpperCase() ?? ''
  }
}
