function toDoPage() {
    return `<button id="newTodoLink" class="simpleButtons" onclick="toDoEditLink_Click()">New</button>
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
    <?fieldset>`;
}