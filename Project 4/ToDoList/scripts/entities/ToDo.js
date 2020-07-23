class ToDo {

    constructor(toDoTitle) {
       
        this.title = toDoTitle;
        
    
    }

    get _id() {
        return this.id;
    }

    set _id(x) {
        this.id = x;
    }

    get _title() {
        return this._title;
    }

    set _title(x) {
        this.title = x;
    }
    get _createDate() {
        return this.createDate;
    }
    set _createDate(x) {
        this.createDate = x;
    }
    get _creatorId() {
        return this.creatorId;
    }
    set _creatorId(x) {
        this.creatorId = x;
    }
    get _updateDate() {
        return this.updateDate;
    }
    set _updateDate(x) {
        this.updateDate = x;
    }
    get _updaterId() {
        return this.updaterId;
    }
    set _updaterId(x) {
        this.updaterId = x;
    }
    
}
