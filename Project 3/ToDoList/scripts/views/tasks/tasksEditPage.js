function tasksEditPage() {
    return `<input type="hidden" id="id" name="id" />
    <input type="hidden" id="todoId" name="todoId" />
    <input type="hidden" id="lastChangeUserId" name="lastChangeUserId" />
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
                <td colspan="2"><input id="newTaskSaveBtn" class="simpleButtons" type="button" onclick="taskEditForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;}