import { submitTaskForm } from "../../../controllers/taskController";

export default function taskEdit(action) {
    return {template: `
            <input type="hidden" id="id" name="id"/>
            <input type="hidden" id="id" name="id">
            <div class="form-holder section">
                <h2 class="section-heading">${action} Task</h2>
                <form>
                    <div>
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title"/>
                    </div>
                    <div>
                        <label for="description">Title</label>
                        <input type="text" id="description" name="description"/>
                    </div>
                    <div>
                        <label for="isComplete">Task</label>
                        <input type="checkbox" id="isComplete" name="isComplete"/>
                    </div>
                    <input type="submit" id="editTaskBtn" value="save"/>
                </form>
            </div>`,
        listeners: [
            {
                targetId: 'editTaskBtn',
                eventType: 'click',
                callback: () => submitTaskForm
            }
        ]
    };
}