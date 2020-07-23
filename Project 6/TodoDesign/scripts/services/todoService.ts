import { URL_BASE,URL_TODOS } from '../utils/constants';
import BaseService from './baseService';
import AuthenticationService from './authenticationService';
class TodoService extends BaseService {
 
    constructor() {
        super(URL_TODOS);
    }
    public async shareItem(userId:string,todoListId: string): Promise<void> {
    await fetch(`${URL_BASE}${URL_TODOS}/${todoListId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthenticationService.getAuthorizationHeader()
      },
      body: JSON.stringify({userId})
    });
  }
}


export default new TodoService();