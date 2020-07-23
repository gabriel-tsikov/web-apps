import {usersEditLink_Click} from '../../events';

export default function usersPage() {
    return {template:`<button id="newUserLink" class="button" >New</button>
    <fieldset>
    <table id="usersTable">
        <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Is admin</th>
            <th>Creation date</th>
            <th>Creator ID</th>
            <th>Last change</th>
            <th>Did the last change ID</th>
            
        </tr>         
    </table>
    <?fieldset>`,
    listeners: [
        {
            targetId: 'newUserLink',
            eventType: 'click',
            callback: usersEditLink_Click
        }
    ]
};
}