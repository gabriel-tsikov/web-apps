import {usersEditForm_Submit} from '../../events';
export default function usersEditPage() {
    return {template:`<input type="hidden" id="id" name="id" />
    
    <fieldset>
        <legend>User</legend>
        <table>
            <tr>
                <td>Username:</td>
                <td><input type="text" id="username" name="username" placeholder="username" /></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" id="password" name="password" placeholder="password" /></td>
            </tr>
            <tr>
                <td>First Name:</td>
                <td><input type="text" id="firstName" name="firstName" placeholder="First Name" /></td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td><input type="text" id="lastName" name="lastName" placeholder="Last Name" /></td>
            </tr>
            <tr>
                <td>Is admin:</td>
                <td><input type="checkbox" id="isAdmin" name="isAdmin" /></td>
            </tr>
            
            <tr>
                <td colspan="2"><input id="editBtnUser" class="button" type="button" value="Save" /></td>
            </tr>
        </table>
    </fieldset>` ,
    listeners: [
        {
            targetId: 'editBtnUser',
            eventType: 'click',
            callback: usersEditForm_Submit
        }
      ]
  } ;
}