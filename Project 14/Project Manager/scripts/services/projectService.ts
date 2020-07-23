import BaseService from "./baseService";
import { URL_PROJECTS, URL_BASE } from "../utils/constants";
import AuthenticationService from "./authenticationService";

class ProjectService extends BaseService {
    constructor() {
        super(URL_PROJECTS);
    }

    public async addTeamTOProject(projectId:string,teamId: string ): Promise<void> {
        
        await fetch(`${URL_BASE}${URL_PROJECTS}/${projectId}`, {
        method:'POST',
        headers: {
        'Content-Type':'application/json',
        Authorization:AuthenticationService.getAuthorizationHeader()
        },
        body:JSON.stringify({teamId})
        });
      }
}

export default new ProjectService();