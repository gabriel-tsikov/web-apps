import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CustomValidators } from './validator.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  email: string;
  password: string;
  password2: string;
  registerFailed: boolean;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);
    let password = new FormControl('', [Validators.required]);
    let password2 = new FormControl('', [
      Validators.required,
      CustomValidators.passwordsMatch(this.password, this.password2).bind(this),
    ]);
    this.profileForm = new FormGroup(
      {
        email: email,
        password: password,
        password2: password2,
      },
      {}
    );
    this.authService.registerFailed.subscribe(
      (data) => (this.registerFailed = data)
    );
  }
  register(formValue: any): void {
    if (this.profileForm.valid) {
      this.authService.signUpUser(formValue.email, formValue.password);
    }
  }
  cancel(): void {
    this.router.navigate(['movies-list']);
  }
}
