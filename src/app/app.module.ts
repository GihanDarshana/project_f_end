import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SetMyColorDirective } from './derectives/set-my-color.directive';

import { TasksComponent } from './tasks/tasks.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { NewsService } from './news/news.service';
import { NewsComponent } from './news/news.component';
import { ImagesComponent } from './images/images.component';
import { DisplayComponent } from './display/display.component'

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

 {
  path: 'register',
  component: RegisterComponent
},

  {
    path: 'task',
    component: TasksComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SetMyColorDirective,
    TasksComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    NewsComponent,
    ImagesComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [HttpErrorHandler, MessageService, AuthenticationService, AuthGuardService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
