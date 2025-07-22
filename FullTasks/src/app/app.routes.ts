import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { TodoWrapper } from './todo-wrapper/todo-wrapper';
import { Home } from './home/home';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details'; // <-- make sure to create this
import { NotFoundError } from 'rxjs';
export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'first-todo', component: Todo },
  { path: 'second-todo', component: TodoWrapper },
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetails }, // <-- New details route
  { path: '**', component: NotFoundError } // <-- Handle 404 properly
];
