import AuthenticationService from '../services/authenticationService';
import { Listener, LoggedUser } from './models';
import { navigation } from '../views/components/navigation/index';



export function render(selector, renderData: { template: string, listeners: Listener[] }): void {
  const container: HTMLElement = (document.querySelector(selector) as HTMLElement);
  container.innerHTML = renderData.template;

  if (renderData && renderData.listeners && renderData.listeners.length) {
    for (const listener of renderData.listeners) {
      const target: HTMLElement = (document.getElementById(listener.targetId) as HTMLElement);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }
}

export function handleNavigation(): void {
  const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();

  if(loggedUser) {
    render('.nav-container', navigation());
  } else {
    render('.nav-container', { template: '', listeners: [] });
  }
  /*if (loggedUser) {
    render('.nav-container', navigation());
  } else {
    render('.nav-container', { template: '', listeners: [] });
  }*/
}

export async function handleResponse(response: Response) {
  if (response && response.ok) {
    return await response.json();
  } else {
    return new Error(`Failed with status code ${response.status}`);
  }
}
