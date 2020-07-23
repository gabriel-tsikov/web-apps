import { submitWorkForm } from "../../../controllers/worklogController";

export default function workEdit(projectId: string, action: string, taskId: string) {
    return { template: `
    <div  class="modal">
    
    <input type="hidden" id="projectId" name="projectId"/>
    <input type="hidden" id="taskId" name="taskId"/>
    <input type="hidden" id="id" name="id"/>
        <div class="modal-content">
        <div class="head"><h2 class="section-heading">${action} task</h2></div>
        
            <form class="user-form">
                <div >
                    <input class="user-input" type="text" id="time" name="time" placeholder="Time"/>
                </div>
                <div class="task-input">
                    <input class="user-input" type="date" id="date" name="date"  placeholder="Date" />
                </div>
                <div class="task-input">
                    <input class="user-input" type="text" id="userId" name="userId"  placeholder="Assignee Id" />
                </div> 
                <div style="border: none;">
                    <input class="edit-proj-btn" type="submit" id="editWorkBtn" value="${action} task"/>
                </div>
            </form>
        </div>
    </div>`,
    listeners: [
        {
            targetId: "editWorkBtn",
            eventType: 'click',
            callback: () => submitWorkForm(projectId,taskId)
        }
    ]}
}