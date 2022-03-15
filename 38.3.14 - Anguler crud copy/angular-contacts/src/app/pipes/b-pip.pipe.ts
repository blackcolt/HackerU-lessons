import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bPip'
})
export class BPipPipe implements PipeTransform {
//hello -> hbeblblbob
  transform(word?: string): string {
    let wordAsArray = [...word || ''];
    let lettersWithB = wordAsArray.map(letter => letter + 'B')
    return lettersWithB.join("");
  }
}
