import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDos: Todo[]
  constructor() { 
    this.toDos = [{
      _id: '1',
      text: 'idan',
      date: new Date(),
      isDone: false,
      price: 20.12121212121
    },
    {
      _id: '2',
      text: 'gil',
      date: new Date(),
      isDone: true,
      price: 19.888888
    },
    {
      _id: '3',
      text: 'dan',
      date: new Date(),
      isDone: false,
      price: 15.7777777
    }]
  }

  getTodos(): Todo[] {
    return this.toDos
  }
}
