import AuthenticationService from './authenticationService';

import { URL_BASE,URL_TODOS,URL_TASKS } from '../utils/constants';
import { handleResponse } from '../utils/helpers';

class TaskService{
    public async getAll(id:string): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${id}${URL_TASKS}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': AuthenticationService.getAuthorizationHeader()
            },
          });
          return await handleResponse(response);
    }

    public async getById(listId:any,taskId:any): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await handleResponse(response);
    }

    public async addItem(item:any, listId:any): Promise<void> {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
    }
    public async editItem(item:any,listId:any,taskId:any): Promise<void> {
      await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthenticationService.getAuthorizationHeader()
        },
        body: JSON.stringify(item)
      });
    }


    public async deleteItem(listId:any,taskId:any): Promise<void> {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    }
}

export default new TaskService();