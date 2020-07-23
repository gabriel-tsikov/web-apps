import { URL_USERS } from "../constants";
import BaseRepository from "./baseRepository";
class UsersRepository extends BaseRepository{
    constructor() {
        super(URL_USERS);
    }
  
}
export default new UsersRepository();
