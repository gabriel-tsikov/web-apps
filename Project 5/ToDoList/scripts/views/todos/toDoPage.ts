import {toDoEditLink_Click} from '../../events';

export default function toDoPage() {
    return {template:`<button id="newTodoLink" class="button" >New</button>
    <fieldset>
    <legend>TO-Do</legend>
    <table id="toDoTable">
        <tr>
            <th>List Id</th>
            <th>Title</th>
            <th>Creation Date</th>
            <th>Creator ID</th>
            <th>Last change</th>
            <th>Did the last change ID</th>
            <td class="button"></td>
            <td class="button"></td>
            <td class="button"></td>
            
        </tr>         
    </table>
    <?fieldset>`,
    listeners: [
        {
            targetId: 'newTodoLink',
            eventType: 'click',
            callback: toDoEditLink_Click
        }
    ]
};
}