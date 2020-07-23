import { URL_MEMBERS, URL_BASE, URL_TEAMS } from "../utils/constants";
import AuthenticationService from "./authenticationService";
import { handleResponse } from "../utils/helpers";

class MemberService{
    public async getMembers(id: string): Promise<void> {
        const response = await fetch(`${URL_BASE}${URL_TEAMS}/${id}${URL_MEMBERS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthenticationService.getAuthorizationHeader()
            },
        });
        return await handleResponse(response);
    }
    public async addMember(userId:string,teamId: string): Promise<void> {
        await fetch(`${URL_BASE}${URL_TEAMS}/${teamId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getAuthorizationHeader()
          },
          body: JSON.stringify({userId})
        });
    }
    
}
export default new MemberService();