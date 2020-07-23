import { addMemeberTeamForm } from "../../../controllers/teamsController";

export default function teamsMembers() {
    return {template: `
    
    <div id="myModal" class="modal">
    <input type="hidden" id="teamId" name="teamId"/>
        <div class="head"><h2 class="section-heading">Add Member</h2></div>
        <div class="modal-content">
            <form class="team-form">
                <div class="team-input">
                    <input type="text" id="userId" name="userId" placeholder="ID"/>
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
                callback: addMemeberTeamForm
            }
        ]}
}