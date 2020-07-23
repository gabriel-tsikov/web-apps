import BaseService from './baseService';

import { URL_TEAMS, URL_BASE} from '../utils/constants';
import AuthenticationService from './authenticationService';


class TeamsService extends BaseService {
  constructor() {
    super(URL_TEAMS);
  }
}
export default new TeamsService();


