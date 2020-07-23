import {taskEditForm_Submit} from '../../events';

export default function tasksEditPage() {
    return {template:`<input type="hidden" id="id" name="id" />
    <input type="hidden" id="todoId" name="todoId" />
    <fieldset>
        <legend>Task</legend>
        <table>
            <tr>
                <td>Title:</td>
                <td><input type="text" id="task" name="task" placeholder="title" /></td>
            </tr>
            <tr>
                <td>Description:</td>
                <td><input type="text" id="description" name="description" placeholder="description" /></td>
            </tr>

            <tr>
                <td>Is Complete:</td>
                <td><input type="checkbox" id="isComplete" name="isComplete" /></td>
            </tr>
            
            <tr>
                <td colspan="2"><input id="newTaskSaveBtn" class="button" type="button" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`, 
    listeners: [
        {
            targetId: 'newTaskSaveBtn',
            eventType: 'click',
            callback: taskEditForm_Submit
        }
      ]
  };
}