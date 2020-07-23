import {toDosEditForm_Submit} from '../../events';

export default function toDoDetailPage() {
    return {template: `<input type="hidden" id="id" name="id" />
    <fieldset>
        <legend>Title</legend>
        <table>
            <tr>
                <td>To-Do:</td>
                <td><input type="text" id="title" name="title"  /></td>
            </tr>    
            <tr>
                <td colspan="2"><input id="saveBtn" class="button" type="button" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`,
    listeners: [
        {
            targetId: 'saveBtn',
            eventType: 'click',
            callback: toDosEditForm_Submit
        }
      ]
  };
}