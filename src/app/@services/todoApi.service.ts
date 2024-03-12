import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../@models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private url = '/api/todo2_16';

  constructor(private http: HttpClient) { }

  getTodoDataList() {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(value: Todo) {
    return this.http.post<Todo>(this.url, value);
  }

  updateTodo(value: Todo) {
    return this.http.put(`${this.url}/${value.TodoId}`, value);
  }

  deleteTodo(value: Todo) {
    return this.http.delete(`${this.url}/${value.TodoId}`);
  }

  updateAllStatus(value: boolean) {
    return this.http.put(`${this.url}/Status/${value}`, null);
  }

  clearCompleted() {
    return this.http.delete(`${this.url}/clearCompleted`);
  }

}
