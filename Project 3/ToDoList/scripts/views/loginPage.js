function loginPage() {
    return `<fieldset>
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
            <td colspan="2"><input id="loginBtn" class="simpleButtons" type="button" onclick="loginForm_Submit()" value="Login" /></td>
        </tr>
    </table>
</fieldset>`;
}