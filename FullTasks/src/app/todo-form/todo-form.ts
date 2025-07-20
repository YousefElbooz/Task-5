import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoModel } from '../../models/Todo';
@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm {
  todo: string = '';
  @Output() addTodo = new EventEmitter<TodoModel>();

  submitTodo() {
    if (this.todo.trim()) {
      const newTodo: TodoModel = {
        content: this.todo,
        completed: false
      };
      this.addTodo.emit(newTodo);
      this.todo = '';
    }
  }
}
