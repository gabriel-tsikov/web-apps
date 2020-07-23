import AuthenticationService from "../services/authenticationService";
import { LoggedUser, Listener } from "./models";
import { navigation } from "../views/components/navigation/index";
import { MAIN_CONTAINER_SELECTOR } from "./constants";
import login from "../views/pages/login";



export function render(selector:string, renderData: { template: string, listeners: Listener[] }): void {
  const content: HTMLElement = (document.querySelector(selector) as HTMLElement);
  content.innerHTML = renderData.template;

  if (renderData && renderData.listeners && renderData.listeners.length) {
    for (const listener of renderData.listeners) {
      const target: HTMLElement = (document.getElementById(listener.targetId) as HTMLElement);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }
}


export function handleNavigation(): void {
  const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();
  
  if (loggedUser) {
    render(MAIN_CONTAINER_SELECTOR, navigation());
  } else {
    render(MAIN_CONTAINER_SELECTOR, login());
  }

  
}

  
  
  export async function handleResponse(response: Response) {
    if (response && response.ok) {
      return await response.json();
    } else {
      return new Error(`Failed with status code ${response.status}`);
    }
  }

  export function modal(renderData:{template:string, listeners: Listener[] }):void {
    const modal: HTMLDivElement = document.createElement('div');
    modal.classList.add("modal");
    const modalContent: HTMLDivElement = document.createElement('div');
    modalContent.classList.add("modal-content");
    modalContent.innerHTML = renderData.template;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener("click", function(event) {
      if (event.target == modal) {
        document.body.removeChild(modal);
      }
    });

    if (renderData && renderData.listeners && renderData.listeners.length) {
      for (const listener of renderData.listeners) {
        const target: HTMLElement = (document.getElementById(listener.targetId) as HTMLElement);
        target.addEventListener(listener.eventType, listener.callback);
      }
    }
  }

  