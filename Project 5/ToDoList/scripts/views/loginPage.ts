import {loginForm_Submit} from '../events'
export default function loginPage() {
    return {template:`<fieldset>
    <legend>Login</legend>
    <table>
        <tr>
            <td style="color: red;" id="error"></td>
        </tr>
        <tr>
            <td>Username:</td>
            <td><input id="username" type="text" name="username" placeholder="username"  /></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input id="password" type="password" name="password" placeholder="password" /></td>
        </tr>
        <tr>
            <td colspan="2"><input id="loginBtn" class="button" type="button"  value="Login" /></td>
        </tr>
    </table>
</fieldset>`,
listeners: [
    {
        targetId: 'loginBtn',
        eventType: 'click',
        callback: loginForm_Submit
    }
]
};
}