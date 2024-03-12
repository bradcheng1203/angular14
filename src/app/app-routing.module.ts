import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frameset/home/home.component';
import { TodoComponent } from './frameset/todo/todo.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'frameset',    
    loadChildren: () => import('./frameset/frameset.module').then(m => m.FramesetModule)
  },
  { path: '', redirectTo: '/frameset/home', pathMatch: 'full' },
  { path: '404',    
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule)
  },
  { path: '**', redirectTo: '/404' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
