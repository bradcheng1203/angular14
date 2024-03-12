import { Component, OnInit } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from '../../@models/todo.model';
import { TodoService } from '../../@services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'Todo';
  todoInputModel = '';
  TodoStatusType = TodoStatusType;
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todoDataList = [];
    this.todoService.getData();
    console.log( this.todoService.nowTodoList);
  }
  
  add() {
    this.todoService.add(this.todoInputModel);
    this.todoInputModel = '';
  }
  
  get toggleAllBtn() {
    return this.todoService.toggleAllBtn;
  }
  get nowTodoList() {
    return this.todoService.nowTodoList;
  }
  
  toggleAll() {
    this.todoService.toggleAll();
  }
  update(item: Todo) {
    this.todoService.update(item);
  }

  clickCheck(item: Todo) {
    this.todoService.clickCheck(item);
  }

  delete(item: Todo) {
    this.todoService.delete(item);
  }
  edit(item: Todo) {
    if (item.CanEdit) {
      item.Editing = true;
    }
  }
  
  get todoActive(): Todo[] {
    return this.todoService.todoActive;
  }

  get todoCompleted(): Todo[] {
    return this.todoService.todoCompleted;
  }

  get getTodoStatusType() {
    return this.todoService.TodoStatusType;
  }
  
  clearCompleted() {
    this.todoService.clearCompleted();
  }
 
  setTodoStatusType(type: number) {
    this.todoService.setTodoStatusType(type);
  }
  
}
