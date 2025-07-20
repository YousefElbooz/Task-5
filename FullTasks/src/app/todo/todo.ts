import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../models/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {

  todos:TodoModel[]=[];

  constructor () {}

  ngOnInit(): void {
    this.todos = [
    ] 
  }
  toggleDone (id:number) {
    this.todos.map((v,i) => {
      if(i==id)
        v.completed=!v.completed;
      return v;
    })
  }

    deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i)=> i!==id);
  }

  inputTodo:string = "";

  addTodo () {
    this.todos.push({
      content:this.inputTodo,
      completed:false,
    })

    this.inputTodo="";
  }


}
