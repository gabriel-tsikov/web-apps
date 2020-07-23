import '../styles/styles.css';
import { handleNavigation, render } from './utils/helpers';
import AuthenticationService from './services/authenticationService';

import login from './views/pages/login';

import { MAIN_CONTENT_SELECTOR } from './utils/constants';
import { loadTodos } from './controllers/todoController';

window.addEventListener('DOMContentLoaded', init);
async function init() {
  const loggedUser = AuthenticationService.getLoggedUser();

  if (!loggedUser) {
    render(MAIN_CONTENT_SELECTOR, login());
  } else {
    await loadTodos();
  }

  handleNavigation();
}
