import { Component } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';
import { TodoModel } from '../../models/Todo';

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoForm,TodoList,TodoWrapper],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css'
})
export class TodoWrapper {
  todos: TodoModel[] = [];

  handleAddTodo(todo:TodoModel) {
    this.todos.push(todo);
  }
}
