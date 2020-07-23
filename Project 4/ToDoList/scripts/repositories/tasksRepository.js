class TasksRepository{
    static async getAll(id) {
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${id}${URL_TASKS}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await response.json();
      }
    
      static async getById(listId,taskId) {
        const response = await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
    
        return await response.json();
      }
    
      static async addItem(item, listId) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
      }
    
      static async editItem(item,listId,taskId) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify(item)
        });
      }
    
      static async deleteItem(listId,taskId) {
        await fetch(`${URL_BASE}${URL_TODOS}/${listId}${URL_TASKS}/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
        });
      }

}