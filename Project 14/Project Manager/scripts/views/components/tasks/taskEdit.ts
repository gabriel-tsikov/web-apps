import { submitTaskForm } from "../../../controllers/tasksController";

export default function taskEdit(action: string) {
    return {template:`
        
        <div  class="modal">
        <input type="hidden" id="id" name="id"/>
        <input type="hidden" id="projectId" name="projectId"/>
            <div class="modal-content">
            <div class="head"><h2 class="section-heading">${action} task</h2></div>
            
                <form class="user-form">
                    <div >
                        <input class="user-input" type="text" id="title" name="title" placeholder="Title"/>
                    </div>
                    <div >
                        <input class="user-input" type="text" id="description" name="description" placeholder="Description" />
                    </div>
                    <div >
                        <select class="user-input" id="status" name="status" placeHolder="status">
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div >
                        <input class="user-input" type="text" id="assigneeId" name="assigneeId" placeholder="Assignee" />
                    </div>
                    <div style="border: none;">
                        <input class="edit-proj-btn" type="submit" id="editTaskBtn" value="${action} task"/>
                    </div>
                </form>
            </div>
        </div>
        `,
    listeners: [
        {
            targetId: "editTaskBtn",
            eventType: 'click',
            callback: submitTaskForm
        }
    ]}
}