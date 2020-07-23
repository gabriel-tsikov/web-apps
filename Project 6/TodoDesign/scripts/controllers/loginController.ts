import AuthenticationService from '../services/authenticationService';
import { LoggedUser } from '../utils/models';

import { loadTodos } from './todoController';

import login from '../views/pages/login';

import { MAIN_CONTENT_SELECTOR } from '../utils/constants';
import { handleNavigation, render } from '../utils/helpers';
//Submit login button function
export async function submitLoginForm(): Promise<void> {
  event.preventDefault();

  const username: string = (document.getElementById('username') as HTMLInputElement).value;
  const password: string = (document.getElementById('password') as HTMLInputElement).value;

  try {
    await AuthenticationService.authenticate(username, password);
    const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();

    if (!loggedUser) {
      (document.getElementById('error') as HTMLElement).innerHTML = 'User doesn\'t exist';
    } else {
      await loadTodos();
      handleNavigation();
    }
  } catch (error) {
    console.log('Error:' + error);
  }
}


export function logout(): void {
  AuthenticationService.logout();
  handleNavigation();
  render(MAIN_CONTENT_SELECTOR, login());
}
