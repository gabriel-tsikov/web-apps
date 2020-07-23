function toDoDetailPage() {
    return `<input type="hidden" id="id" name="id" />
    <fieldset>
        <legend>Title</legend>
        <table>
            <tr>
                <td>To-Do:</td>
                <td><input type="text" id="title" name="title"  /></td>
            </tr>    
            <tr>
                <td colspan="2"><input id="saveBtn" type="button" onclick="toDosEditForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;
}