import { submitUserForm } from '../../../controllers/usersController';

export default function usersEdit(action) {
  return {
    template: `
      <input type="hidden" id="id" name="id" />
      <div class="head"><h2 class="section-heading">${action} user</h2></div>
      <div class="user-form-holder section">
        
        <form class="user-form">
          <div class="user-input">
            
            <input type="text" id="username" name="username" placeholder="username"/>
          </div>
          <div class="user-input">
            
            <input type="password" id="password" name="password" placeholder="password" />
          </div>
          <div class="user-input">
            
            <input type="text" id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div class="user-input">
            <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>
          </div>
          <div class="user-input">
            
            <input type="checkbox" id="isAdmin" name="isAdmin" />
          </div>
          <div style="border: none;">
            <input type="submit" id="editUserBtn" value="${action} user"/>
          </div>
        </form>
      </div>
    </fieldset>`,
    listeners: [
      {
        targetId: 'editUserBtn',
        eventType: 'click',
        callback: submitUserForm
      }
    ]
  };
}
