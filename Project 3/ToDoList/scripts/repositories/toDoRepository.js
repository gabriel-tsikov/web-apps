class ToDoRepository{
    static todos = 'todos';

    static async getAll() {

        return JSON.parse(await window.localStorage.getItem(this.todos));
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
        const result = [];
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._userId == id) {

                result.push(currentItem);
            }
        }

        return result;
    }
    
    static async deleteAllByParentId(id){

            const items = await this.getAll();
            if(items != null  ){
                for (let i = 0; i < items.length; i++) {
                    const currentItem = items[i];
                    if(currentItem._userId == id){
                        await TasksRepository.deleteAllByParentId(currentItem._id);
                        continue;   
                    }
                }
            
            const newItems = items.filter(item => item._userId != id);
           await window.localStorage.setItem(this.todos, JSON.stringify(newItems));

            this.isEmpty();
            }
    }




    static getNextId(items) {

        if (items == undefined || null ) {
            return 1;
        }

        return items[items.length-1]._id + 1;
    }

    static async addTodo(item) {
        let items = await this.getAll();
        const id = this.getNextId(items);
        item._id = id;
        if (items == null)
            items = [];

        items.push(item);
        await window.localStorage.setItem(this.todos, JSON.stringify(items));
    }

    static async editTodo(id, item) {
        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                currentItem._userId = item.userId;
                currentItem._toDoTitle = item.toDoTitle;
                currentItem._lastChangeDate =this.dateNow;
                currentItem._lastChangeUserId = item.lastChangeUserId;
            }
        }

        await window.localStorage.setItem(this.todos, JSON.stringify(items));
    }

    static async deleteTodo(id) {

        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                await TasksRepository.deleteAllByParentId(currentItem._id);
                items.splice(i, 1);
            }
        }

        await window.localStorage.setItem(this.todos, JSON.stringify(items));
        if (items.length == 0 || null || undefined){
            await localStorage.removeItem(this.todos);
         }
        
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

    

    static  dateNow = (function getDate(){
        var d = new Date, dformat = [ d.getDate(),d.getMonth(), d.getFullYear()].join('/') + 
                            '  ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
         return dformat;
                  })();
                  
}