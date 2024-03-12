import { Injectable } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from '../@models/todo.model';
import { TodoApiService } from './todoApi.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toggleAllBtn = false;
  TodoStatusType = TodoStatusType.All;
  todoDataList: Todo[] = [];  

  get nowTodoList() {
    let list: Todo[] = [];
    switch (this.TodoStatusType) {
      case TodoStatusType.Active:
        list = this.todoActive;
        break;
      case TodoStatusType.Completed:
        list = this.todoCompleted;
        break;
      default:
        list = this.todoDataList;
        break;
    }
    return list;
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter(data => !data.Status);
  }

  get todoCompleted(): Todo[] {
    return this.todoDataList.filter(data => data.Status);
  }
  
  constructor(private todoApiService: TodoApiService) {
    this.getData();
  }

  getData() {
    this.todoApiService.getTodoDataList().subscribe(data => {
      this.todoDataList = data;
      this.todoDataList.forEach(data2 => {
        data2.CanEdit = true;
        data2.Editing = false;
      });
      this.checkToggleAllBtn();
    });
  }

  add(value: string) {
    const seqno = new Date().getTime();
    const todo: Todo = new TodoClass(value, false, seqno);
    this.todoDataList.push(todo);
    this.todoApiService.addTodo(todo).subscribe(data => {
      this.todoDataList.forEach(data2 => {
        if (data2.Seqno === seqno) {
          data2.TodoId = data.TodoId;
          data2.CanEdit = true;
        }
      })
    });
  }

  update(item: Todo) {
    this.todoApiService.updateTodo(item).subscribe();
    item.Editing = false;
  }

  clickCheck(item: Todo) {
    item.Status = !item.Status;

    this.todoApiService.updateTodo(item).subscribe();
    this.checkToggleAllBtn();
  }

  delete(item: Todo) {
    this.todoApiService.deleteTodo(item).subscribe();
    this.todoDataList = this.todoDataList.filter(data => data !== item);
  }

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.Status = this.toggleAllBtn;
    });
    this.todoApiService.updateAllStatus(this.toggleAllBtn).subscribe();
  }

  clearCompleted() {
    this.todoApiService.clearCompleted().subscribe();
    this.todoDataList = this.todoActive;
  }

  checkToggleAllBtn() {
    if (this.todoCompleted.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }
  
  setTodoStatusType(type: number) {
    this.TodoStatusType = type;
  }

}
