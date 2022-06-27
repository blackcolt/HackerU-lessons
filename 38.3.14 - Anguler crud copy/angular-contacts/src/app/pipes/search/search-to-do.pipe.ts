import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
@Pipe({
  name: 'searchToDo'
})

export class SearchToDoPipe implements PipeTransform {
  transform(toDos: Todo[], search: string): Todo[] {
    // search: dan
    //toDos: idan, gil, dan
    if (!search) return toDos
    return toDos.filter(toDo=>toDo.text.includes(search) || toDo.price.toString().includes(search))
  }
}
