import { submitTodoForm } from '../../../controllers/todoController';

export default function todosEdit(action) {
    return{template: `<input type="hidden" id="id" name="id" />
    <div class="head"><h1 class="section-head">${action} todo</h1></head>
    
    <div class="edit-form-holder section">
        
        <form class="edit-form">
            <div class="edit-input">
                <label for="title">Todo Title</label>
                <input type="text" id="title" name="title">
            </div>
            <div style="border: none;">
                <input type="submit" id="saveBtn" value="${action} Todo">
            </div>
        </form>
    </div>`,
    listeners: [
        {
            targetId: 'saveBtn',
            eventType: 'click',
            callback:   submitTodoForm
        }
      ]

    };
}