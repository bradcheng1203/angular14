import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramesetComponent } from './frameset.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: FramesetComponent,
    children: [
      { path: 'home', component : HomeComponent },
      { path: 'todo', component : TodoComponent },      
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FramesetRoutingModule { }
