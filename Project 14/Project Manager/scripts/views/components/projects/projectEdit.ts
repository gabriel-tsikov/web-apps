import {  submitProjectForm } from "../../../controllers/projectsController";

export default function projectEdit(action: string) {
    return {template:`
        
        <div  class="modal">
        <input type="hidden" id="id" name="id"/>
            <div class="modal-content">
            <div class="head"><h2 class="section-heading">${action} project</h2></div>
            
                <form class="user-form">
                    <div >
                        <input class="project-input" type="text" id="title" name="title" placeholder="Title"/>
                    </div>
                    <div >
                        <input class="project-input-description" type="text" id="description" name="description" placeholder="Description" />
                    </div>
                    <div style="border: none;">
                        <input class="edit-proj-btn" type="submit" id="editProjectBtn" value="${action} project"/>
                    </div>
                </form>
            </div>
        </div>
        `,
    listeners: [
        {
            targetId: "editProjectBtn",
            eventType: 'click',
            callback: submitProjectForm
        }
    ]}
}