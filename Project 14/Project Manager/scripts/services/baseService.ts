import AuthenticationService from './authenticationService';

import { URL_BASE } from '../utils/constants';
import { handleResponse } from '../utils/helpers';


export default class BaseService {
    public url: string;
    constructor(url: string) {
        this.url = url;
    }   
    
    
    public async getAll(): Promise<any> {
        const response = await fetch(`${URL_BASE}${this.url}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': AuthenticationService.getAuthorizationHeader()
            }
          });
        return handleResponse(response);
    } 


    public async getById(id: string): Promise<any> {
        const response = await fetch(`${URL_BASE}${this.url}/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          }
        });
    
        return handleResponse(response);
    }


    public async addItem(item: any): Promise<void> {
        await fetch(`${URL_BASE}${this.url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
    }

    
    public async editItem(item: any): Promise<void> {
      
        await fetch(`${URL_BASE}${this.url}/${item.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
    }


    public async deleteItem(id: string): Promise<void> {
        await fetch(`${URL_BASE}${this.url}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          }
        });
    }
    
}
