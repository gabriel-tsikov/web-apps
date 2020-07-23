import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class UserModule {}
