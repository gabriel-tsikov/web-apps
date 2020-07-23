import { addProjectTeam } from "../../../controllers/projectsController";

export default function teamsMembers() {
    return {template: `
    
    <div id="myModal" class="modal">
    
        <div class="head"><h2 class="section-heading">Add Member</h2></div>
        <div class="modal-content">
            <form class="team-form">
                <div class="team-input">
                    <input type="hidden" id="projectId" name="projectId"/>
                    <input type="text" id="teamId" name="teamId" placeholder="ID"/>
                </div>
                <div style="border: none;">
                    <input type="submit" id="memberBtn" value="Add Team Member"/>
                </div>
            </form>
        </div>
    </div>
        `,
        listeners: [
            {
                targetId: "memberBtn",
                eventType: 'click',
                callback: addProjectTeam
            }
        ]}
    }