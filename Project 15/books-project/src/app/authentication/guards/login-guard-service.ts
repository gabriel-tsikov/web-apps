import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JWT_TOKEN } from '../authentication.constants';
import {
  UNATUHORIZED_REDIRECT_PATH,
  LOGIN_REDIRECT_PATH,
} from 'src/app/constants/app.route';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userLogged = sessionStorage.getItem(JWT_TOKEN);
    if (!userLogged) {
      this.router.navigate([LOGIN_REDIRECT_PATH]);
      return false;
    } 
    return true;
  }
}