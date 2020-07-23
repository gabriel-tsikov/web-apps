class TasksRepository {

  static tasks = "tasks";

  static async getAll() {

      return JSON.parse(await window.localStorage.getItem(this.tasks));
  }
  
  static async isEmpty(){
    const items = await this.getAll();
    if (items.length == 0 || null || undefined){
        await localStorage.removeItem(this.todos);
        return true;
    } else {
        return false;
    }
}

  static async count() {
      const items = await this.getAll();

      return items == null ? 0 : items.length;
  }

  static async getById(id) {

      const items = await this.getAll();
  
      for (let i = 0; i < items.length; i++) {
          const currentItem = items[i];
          if (currentItem._id == id) {

              return currentItem;
          }
      }
  }

  static async getByParentId(id) {
      const items = await this.getAll();
      if(items == null || undefined )
      return;
      const result = [];
      for (let i = 0; i < items.length; i++) {
          const currentItem = items[i];
          if (currentItem._toDoId == id) {

              result.push(currentItem);
          }
      }

      return result;
  }

  static async deleteAllByParentId(id){
      
    const items = await this.getByParentId(id);
    if(items != null  ){
        const newItems = items.filter(item => item._toDoId != id);
        await window.localStorage.setItem(this.tasks, JSON.stringify(newItems));

        this.isEmpty();
    }
}

  static getNextId(items) {

      if (items == undefined || null) {
          return 1;
      }

      return items[items.length - 1]._id + 1;
  }

  static async addTask(item) {
      let items = await this.getAll();
      const id = this.getNextId(items);
      item._id = id;
      if (items == null){
          items = [];
      }
         
      items.push(item);

      await window.localStorage.setItem(this.tasks, JSON.stringify(items));
  }
}