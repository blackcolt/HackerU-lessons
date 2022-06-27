import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
@Pipe({
  name: 'getDoneToDo'
})


//[do hw (done), talk to matan (false), give 2 points to dor (done)]
export class GetDoneToDoPipe implements PipeTransform {
  transform(toDos: Todo[], isDone?:boolean): Todo[] {
    if (!isDone) return toDos
    return toDos.filter(toDo=>toDo.isDone)
  }
}
