class User {
    constructor(username, password, firstName, lastName, creatorId, lastChangeUserId, isAdmin) {
        this._username = username;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._isAdmin = isAdmin;
        this._created = this.dateNow;
        this._updated = this._created;
        this._creatorId = creatorId;
        this._lastChangeUserId = lastChangeUserId;

    }

    get id() {
        return this._id;
    }

    set id(x) {
        this._id = x;
    }

    get username() {
        return this._username;
    }

    set username(x) {
        this._username = x;
    }

    get password() {
        return this._password;
    }

    set password(x) {
        this._password = x;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(x) {
        this._firstName = x;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(x) {
        this._lastName = x;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    set isAdmin(x) {
        this._isAdmin = x;
    }

    get created() {
        return this._created;
    }

    set created(x) {
        this._created = x;
    }

    get updated() {
        return this._updated;
    }

    set updated(x) {
        this._updated = x;
    }

    get creatorId() {
        return this._creatorId;
    }

    set creatorId(x) {
        this._creatorId = x;
    }

    get lastChangeUserId() {
        return this._lastChangeUserId;
    }

    set lastChangeUserId(x) {
        this._lastChangeUserId = x;
    }

    
    get dateNow(){
       return(function getDate(){
        var d = new Date, dformat = [ d.getDate(),d.getMonth(), d.getFullYear()].join('/') + 
                            '  ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
         return dformat;
                  })();
                  
    }

}
