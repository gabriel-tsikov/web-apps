function todoTasksPage() {
    return `<table id="todoDetails">
    <tr>
        <td>User:</td>
        <td id="username"></td>
    </tr>
    <tr>
        <td>To-Do:</td>
        <td id="toDo"></td>
    </tr>
    
</table>
<br/>
<fieldset>
<legend>Tasks</legend>
<table id="TasksTable">
<button class="simpleButtons" style="float:right;" id="newTaskLink" >New</button>
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
</fieldset>`;
}