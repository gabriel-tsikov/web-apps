import { submitLoginForm } from '../../controllers/loginController';

export default function login(){
    return{
        template: `
             <div class="login-form-holder">
                <h1 class="section-head">TODO APP</h1>
                <p  class="section-sub-head">Welcome back! Please login to your account.</p>
                <form id="login-form">
                <div class="login-input">
                  <div>
                    <input type="text" id="username" name"username" placeholder="Username"/>
                  </div>
                  <div>
                    <input type="password" id="password" placeholder="Password"/>
                  </div>
                  </div>
                  <div style="border: none;">
                    <input type="submit" id="loginBtn" value="Login"/>
                  </div>
                </form>
        </div>`,
        listeners: [
            {
                targetId:'loginBtn',
                eventType: 'click',
                callback: submitLoginForm
            }
        ]
    };
}
