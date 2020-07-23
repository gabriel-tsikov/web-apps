import { handleNavigation, render } from "../utils/helpers";
import AuthenticationService from "../services/authenticationService";
import login from "../views/pages/login";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import { loadProjects } from "./projectsController";
import { LoggedUser } from "../utils/models";





export async function submitLoginForm():Promise<void>{
    event.preventDefault();

    const username: string = (document.getElementById('username')as HTMLInputElement).value;
    const password: string = (document.getElementById('password')as HTMLInputElement).value;


    try {
        await AuthenticationService.authenticate(username,password);
        const loggedUser: LoggedUser = AuthenticationService.getLoggedUser();

        if (!loggedUser) {
            
            (document.getElementById('error')as HTMLLIElement).innerHTML = "User doesn\'t exist!";
        } else {
            await loadProjects();
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