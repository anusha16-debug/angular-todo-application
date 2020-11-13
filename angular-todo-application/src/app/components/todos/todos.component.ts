import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../../services/todo-service.service'
import { Todo } from '../../model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  faTrashAlt = faTrashAlt;
  todos: Todo[];
  
  

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    
    this.getAllTodos();
  }

  getAllTodos(){
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoService.updateStatusOfTodo(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
    this.getAllTodos();
  }

}
