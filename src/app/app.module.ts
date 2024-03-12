import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frameset/home/home.component';
import { TodoComponent } from './frameset/todo/todo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './frameset/shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SiderbarComponent } from './frameset/shared/siderbar/siderbar.component';
import { LoginComponent } from './login/login.component';
import { FramesetComponent } from './frameset/frameset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    NotfoundComponent,
    HeaderComponent,    
    SiderbarComponent, LoginComponent, FramesetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
