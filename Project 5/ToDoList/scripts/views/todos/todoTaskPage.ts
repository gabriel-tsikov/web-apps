export default function todoTasksPage() {
    return {template:`
    <fieldset>
    <legend>Tasks</legend>
    <table id="TasksTable">
    <button style="float:right;" class="button" id="newTaskLink">New</button>
        <tr>
            <td>Task ID</td>
            <td>List ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>Creation Date</td>
            <td>Creator ID</td>
            <td>Last Change</td>
            <th>Did the last change ID</th>
            <th>Is Complete</th>        
            <td class="button"></td>
            <td class="button"></td>
        </tr>
    </table>
    </fieldset>`, 
    listeners: []};
}