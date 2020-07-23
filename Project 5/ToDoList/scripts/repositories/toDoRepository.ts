import { URL_TODOS } from "../constants";
import BaseRepository from "./baseRepository";
class ToDoRepository extends BaseRepository{
    constructor() {
        super(URL_TODOS);
    }
    
}

export default new ToDoRepository();