import { handleResponse } from "../utils/helpers";
import { URL_BASE, URL_PROJECTS, URL_TASKS } from "../utils/constants";
import AuthenticationService from "./authenticationService";


 class TaskService{
    public async getAll(id:string): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_PROJECTS}/${id}${URL_TASKS}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': AuthenticationService.getAuthorizationHeader()
            },
          });
          return await handleResponse(response);
    }

    public async getById(projectId:any,taskId:any): Promise<any>{
        const response = await fetch(`${URL_BASE}${URL_PROJECTS}/${projectId}${URL_TASKS}/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await handleResponse(response);
    }

    public async addItem(item:any, projectId:any): Promise<void> {
        await fetch(`${URL_BASE}${URL_PROJECTS}/${projectId}${URL_TASKS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
    }
    public async editItem(item:any,projectId:any,taskId:any): Promise<void> {
      await fetch(`${URL_BASE}${URL_PROJECTS}/${projectId}${URL_TASKS}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthenticationService.getAuthorizationHeader()
        },
        body: JSON.stringify(item)
      });
    }


    public async deleteItem(projectId:any,taskId:any): Promise<void> {
        await fetch(`${URL_BASE}${URL_PROJECTS}/${projectId}${URL_TASKS}/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    }
}
export default new TaskService();


