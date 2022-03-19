import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
@Pipe({
  name: 'aboveXLetters'
})
export class AboveXLettersPipe implements PipeTransform {
  transform(toDos: Todo[], above:number): Todo[] {
    if (above === 0) return toDos
    return toDos.filter(toDo=>toDo.text.length > above)
  }
}
