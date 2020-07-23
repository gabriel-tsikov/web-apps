class Task {
    constructor(toDoId, task, description,lastChangeUserId ,isComplete) {
        this._toDoId = toDoId;
        this._task = task;

        this._description = description;
        this._isComplete = isComplete;
        this._creationDate = this.dateNow;
        this._lastChangeDate = this._creationDate;
        this._lastChangeUserId = lastChangeUserId;
    }

    get id() {
        return this._id;
    }

    set id(x) {
        this._id = x;
    }

    get toDoId() {
        return this._toDoId;
    }

    set toDoId(x) {
        this._toDoId = x;
    }

    get task() {
        return this._task;
    }

    set task(x) {
        this._task = x;
    }

    get description() {
        return this._description;
    }

    set description(x) {
        this._description = x;
    }

    get isComplete() {
        return this._isComplete;
    }

    set isComplete(x) {
        this._isComplete = x;
    }

    get lastChangeUserId() {
        return this._lastChangeUserId;
    }

    set lastChangeUserId(x) {
        this._lastChangeUserId = x;
    }

    




    get dateNow(){
        return(function getDate(){
         var d = new Date, dformat = [d.getDate(),d.getMonth(),  d.getFullYear()].join('/') + 
                             '  ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
          return dformat;
                   })();
                   
     }
}