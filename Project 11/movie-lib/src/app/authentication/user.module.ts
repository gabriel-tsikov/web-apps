import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from '../movie-components/movie/movie-routing.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
     
    ],
    imports: [
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      MoviesRoutingModule
    ]
  })
  export class UserModule { }
  