function todoTasksPage() {
    return `
<fieldset>
<legend>Tasks</legend>
<table id="TasksTable">
<button style="float:right;" id="newTaskLink">New</button>
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
        <td class="buttons"></td>
        <td class="buttons"></td>
    </tr>
</table>
</fieldset>`;
}