class Task {
    constructor( title, description ,isComplete) {
        
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
        
    }
    get _id() {
        return this.id;
    }
    set _id(x) {
        this.id = x;
    }
    get _title() {
        return this.title;
    }
    set _title(x) {
        this.title = x;
    }
    get _description() {
        return this.description;
    }
    set _description(x) {
        this.description = x;
    }
    get _isComplete() {
        return this.isComplete;
    }
    set _isComplete(x) {
        this.isComplete = x;
    }
    get _taskListId() {
        return this.taskListId;
    }
    set _taskListId(x) {
        this.taskListId = x;
    }
    get _createDate() {
        return this.createDate;
    }
    set _createDate(x) {
        this.createDate = x;
    }
    get _updateDate() {
        return this.updateDate;
    }
    set _updateDate(x) {
        this.updateDate = x;
    }
    get _creatorId() {
        return this.creatorId;
    }
    set _creatorId(x) {
        this.creatorId = x;
    }
    get _updaterId() {
        return this.updaterId;
    }
    set _updaterId(x) {
        this.updaterId = x;
    }

}