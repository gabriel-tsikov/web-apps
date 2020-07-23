import BaseService from './baseService';

import { URL_USERS } from '../utils/constants';

class UsersService extends BaseService {
  constructor() {
    super(URL_USERS);
  }
}

export default new UsersService();
