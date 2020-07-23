import {URL_BASE,URL_AUTH,LOGGED_USER, TOKEN} from "./constants";


export default class AuthenticationService {
    public static async authenticate(username:string, password:string) {
      const response: Response = await fetch(URL_BASE + URL_AUTH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      });
  
      if (response && response.ok) {
        const result:{token: string,userId:string,isAdmin:boolean} = await response.json();
        const { token, userId, isAdmin} = result;
        window.sessionStorage.setItem(TOKEN, token);
  
  
        window.sessionStorage.setItem(LOGGED_USER, JSON.stringify({
          id: userId,
          isAdmin: isAdmin
        }))
      }
    }
  
    public static getLoggedUser() {
      return JSON.parse(window.sessionStorage.getItem(LOGGED_USER));
    }
  
    public static logout() {
      window.sessionStorage.removeItem(LOGGED_USER);
      window.sessionStorage.removeItem(TOKEN);
    }
  
    public static getAuthorizationHeader() {
      return 'Bearer ' + window.sessionStorage.getItem(TOKEN);
    }
  }
  