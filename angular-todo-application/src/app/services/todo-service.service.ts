import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: Todo[]

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn C++',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn React',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date()
      }
    ]
   }

   //to get all todos
   getTodos(){
     return of(this.todos)
   }

   //to add todo
   addTodo(data: Todo){
     this.todos.push(data)
   }

   //updating the todo
   updateStatusOfTodo(todo: Todo){
     this.todos.map((singleTodo) => {
        if(singleTodo.id === todo.id){
          todo.isCompleted = !todo.isCompleted;
        }
     })
   }

   //deleting a single todo
   deleteTodo(todo: Todo){
     this.todos = this.todos.filter((todoToBeDeleted) => todoToBeDeleted.id != todo.id);

     //finding index and splicing it
     
    //  const indexOfTodo = this.todos.findIndex(
    //    (currentObj) => currentObj.id === todo.id
    //  );
    //  this.todos.splice(indexOfTodo, 1)
   }
}
