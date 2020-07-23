import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mouseoverLogin:boolean;
  constructor(private authenticationSerice: AuthenticationService,private router:Router) { }
  
  ngOnInit(): void {
  }
  login(formValues: any) {
    this.authenticationSerice.loginUser(formValues.email, formValues.password);
    this.router.navigate(['movies-list']);
  }

  cancel() {
    this.router.navigate(['movies-list']);
  }


}
