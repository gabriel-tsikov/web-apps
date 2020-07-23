import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mouseoverLogin: boolean;
  loginFailed: boolean;
  constructor(
    private authenticationSerice: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticationSerice.loginFailed.subscribe(
      (data) => (this.loginFailed = data)
    );
  }
  login(formValues: any): void {
    this.authenticationSerice.loginUser(formValues.email, formValues.password);
  }
  isLoggedUser(): boolean {
    return this.authenticationSerice.loggedUser();
  }

  cancel(): void {
    this.router.navigate(['search-page']);
  }
}
