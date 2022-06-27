import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mosheFy'
})

// create pipe using cli. - Done.
// chagne transofrm first params to be a string
// change return type to be a string
// return moshe
// use it.

export class MosheFyPipe implements PipeTransform {
  transform(word?: string): string {
    return "moishe";
  }
}
