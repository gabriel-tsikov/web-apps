import TaskService from "./taskService";
import { URL_WORKLOGS, URL_BASE, URL_TASKS } from "../utils/constants";
import AuthenticationService from "./authenticationService";
import { handleResponse } from "../utils/helpers";

class WorkLogService {
    public async getAll(id:string): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_TASKS}/${id}${URL_WORKLOGS}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': AuthenticationService.getAuthorizationHeader()
            },
          });
          return await handleResponse(response);
    }

    public async getById(taskId:any,worklogId:any): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_TASKS}/${taskId}${URL_WORKLOGS}/${worklogId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await handleResponse(response);
    }

    public async addItem(item:any, taskId:any): Promise<void> {
      
        await fetch(`${URL_BASE}${URL_TASKS}/${taskId}${URL_WORKLOGS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
    }
    public async editItem(item:any,taskId:any,worklogId:any): Promise<void> {
     
      await fetch(`${URL_BASE}${URL_TASKS}/${taskId}${URL_WORKLOGS}/${worklogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthenticationService.getAuthorizationHeader()
        },
        body: JSON.stringify(item)
      });
    }


    public async deleteItem(taskId:any,worklogId:any): Promise<void> {
     
        await fetch(`${URL_BASE}${URL_TASKS}/${taskId}${URL_WORKLOGS}/${worklogId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    }
    
}

export default new WorkLogService();