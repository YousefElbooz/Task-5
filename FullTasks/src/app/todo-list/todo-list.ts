import { Component, Input } from '@angular/core';
import { TodoModel } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  @Input() todos: TodoModel[] = [];

  removeTodo(index: number) {
  this.todos.splice(index, 1);
}

  toggleDone (id:number) {
    this.todos.map((v,i) => {
      if(i==id)
        v.completed=!v.completed;
      return v;
    })
  }
}
