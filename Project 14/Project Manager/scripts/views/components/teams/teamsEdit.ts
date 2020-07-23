import { submitTeamForm } from "../../../controllers/teamsController";

export default function teamsEdit(action: string) {
    return { template: `
        
        <div id="myModal" class="modal">
            
            
            <div class="modal-content">
            <div class="head"><h2 class="section-heading">${action} user</h2></div>
                <form class="team-form">
                    <div>
                        <input type="hidden" id="id" name="id"/>
                        <input class="user-input" type="text" id="title" name="title" placeholder="Title"/>
                        <input type="hidden" id="createDate" name="createDate"/>
                        <input type="hidden" id="updateDate" name="updateDate"/>
                    </div>
                    <div style="border: none;">
                        <input class="edit-proj-btn" type="submit" id="editTeamBtn" value="${action} team"/>
                    </div>
                </form>
            </div>
        </div>
        `,
        listeners: [
            {
                targetId: "editTeamBtn",
                eventType: 'click',
                callback: submitTeamForm
            }
        ]
    }
} 