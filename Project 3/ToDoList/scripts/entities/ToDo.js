class ToDo {

    constructor(userId, toDoTitle) {
        this._userId = userId;
        this._toDoTitle = toDoTitle;
        this._lastChangeUserId = this._userId;
        this._creationDate = this.dateNow;
        this._lastChangeDate = this._creationDate;
    
    }

    get id() {
        return this._id;
    }

    set id(x) {
        this._id = x;
    }

    get userId() {
        return this._userId;
    }

    set userId(x) {
        this._userId = x;
    }

    get toDoTitle(){
        return this._toDoTitle;
    }

    set toDoTitle(x){
        this._toDoTitle = x;
    }

    get creationDate(){
        return this._creationDate;
    }

    set creationDate(x){
        this._creationDate = x;
    }

    get lastChangeDate() {
        return this._lastChangeDate;
    }

    set lastChangeDate(x){
        this._lastChangeDate = x;
    }

    get lastChangeUserId(){
        return this._lastChangeUserId;
    }

    set lastChangeUserId(x){
        this._lastChangeUserId = x;
    }

    get dateNow(){
        return(function getDate(){
         var d = new Date, dformat = [ d.getDate(), d.getMonth(), d.getFullYear()].join('/') + 
                             '  ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
          return dformat;
                   })();
                   
     }
}
