import { submitUserForm } from "../../../controllers/usersController";

export default function usersEdit(action:string) {
    return { template: `
        <input type="hidden" id="id" name="id"/>
        <div id="myModal" class="modal">
            
            <div class="modal-content">
            <div class="head"><h2>${action} user</h2></div>
                <form class="user-form">
                    <div >
                        <input class="user-input" type="text" id="username" name="username" placeholder="username"/>
                    </div>
                    <div >
                        <input class="user-input" type="password" id="password" name="password" placeholder="password" />
                    </div>
                    <div >
                        <input class="user-input" type="text" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                    <div >
                        <input class="user-input" type="text" id="lastName" name="lastName" placeholder="Last Name"/>
                    </div>
                    <div>
                        <input class="checkbox" type="checkbox" id="isAdmin" name="isAdmin" />
                    </div> 
                    <div style="border: none;">
                        <input class="edit-proj-btn" type="submit" id="editUserBtn" value="${action} user"/>
                    </div>
                </form>
            </div>
        </div>
        `,
        listeners: [
            {
                targetId: "editUserBtn",
                eventType: 'click',
                callback: submitUserForm
            }
        ]
    }
}
  