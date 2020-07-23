import { URL_BASE,URL_TODOS,URL_TASKS  } from "../constants";
import AuthenticationService from "../authentification";

class TasksRepository{
    public async getAll(id:string) {
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${id}${URL_TASKS}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await response.json();
      }
    
      public async getById(listId:any,taskId:any) {
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await response.json();
      }
    
      public async addItem(item:any, listId:any) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
      }
    
      public async editItem(item:any,listId:any,taskId:any) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
      }
    
      public async deleteItem(listId:any,taskId:any) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
      }

}
export default new TasksRepository();