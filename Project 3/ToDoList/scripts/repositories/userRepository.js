class UsersRepository{

    static users = 'users';

    static async getAll() {

        return JSON.parse(await window.localStorage.getItem(this.users));
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

    static async getByUsernameAndPassword(username, password) {
        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._username == username && currentItem._password == password) {

                return currentItem;
            }
        }

        return null;
    }

    static getNextId(items) {

        if (items == undefined | null) {
            return 1;
        }

        return items[items.length - 1]._id + 1;
    }

    static async addUser(item) {
        let items = await this.getAll();
        const id = this.getNextId(items);
        item._id = id;
        if (items == null)
            items = [];

        items.push(item);
        await window.localStorage.setItem(this.users, JSON.stringify(items));
    }

    static async editUser(id, item) {
        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                currentItem._lastChangeUserId = item.lastChangeUserId;
                currentItem._username = item.username;
                currentItem._password = item.password;
                currentItem._firstName = item.firstName;
                currentItem._lastName = item.lastName;
                currentItem._isAdmin = item.isAdmin
                currentItem._updated = this.dateNow;
            }
        }

        await window.localStorage.setItem(this.users, JSON.stringify(items));
    }

    static async deleteUser(id) {
        const items = await this.getAll();
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (currentItem._id == id) {
                
                items.splice(i, 1);
                
            }
        }
        await ToDoRepository.deleteAllByParentId(id);
        await window.localStorage.setItem(this.users, JSON.stringify(items));
      
    }


  static  dateNow = (function getDate(){
     var d = new Date, dformat = [ d.getDate(),d.getMonth(), d.getFullYear()].join('/') + 
                         '  ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
      return dformat;
               })();
               
}
            