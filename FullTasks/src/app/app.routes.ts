import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { TodoWrapper } from './todo-wrapper/todo-wrapper';
import { App } from './app';
import { NotFoundError } from 'rxjs';
import { Home } from './home/home';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  { path: '', component: Home, pathMatch:'full' },
  { path: 'first-todo', component: Todo },
  { path: 'second-todo', component: TodoWrapper },
  { path: 'products', component: ProductList },
  { path: '**', component: NotFoundError} 
];
