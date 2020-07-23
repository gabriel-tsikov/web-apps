import { saveShareForm } from '../../../controllers/todoController';

export default function todosShare() {
    return{template: `<input type="hidden" id="id" name="id" />
    <div class="head"><h1 class="section-head">Share todo</h1></head>
    
    <div class="edit-form-holder section">
        
        <form class="edit-form">
            <div class="edit-input">
                <label for="title">Id of user you want to share with</label>
                <input type="text" id="userId" name="userId">
            </div>
            <div style="border: none;">
                <input type="submit" id="saveBtn" value="Share Todo">
            </div>
        </form>
    </div>`,
    listeners: [
        {
            targetId: 'saveBtn',
            eventType: 'click',
            callback: saveShareForm
        }
      ]

    };
}