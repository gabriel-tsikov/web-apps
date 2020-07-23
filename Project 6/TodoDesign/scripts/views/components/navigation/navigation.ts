import { loadTodos } from "../../../controllers/todoController";
import { loadUsers } from "../../../controllers/usersController";
import { logout } from "../../../controllers/loginController";

export default function navigation() {
    return {template:
        `
        <nav class= "header-menu">
            <ul>
                <li id="todosLink" class="nav-item"><a class="nav-link">Home</a></li>
                <li id="usersLink" class="nav-item"><a class="nav-link">Users</a></li>
                <li id="logoutLink" class="nav-item"><a class="nav-link">Sign Out</a></li> 
            </ul>
        </nav>
        `,
        listeners: [
            {
                targetId: "todosLink",
                eventType: 'click',
                callback:   loadTodos
            },
            {
                targetId: "usersLink",
                eventType: 'click',
                callback: loadUsers
            },
            {
                targetId: "logoutLink",
                eventType: 'click',
                callback: logout
            }         
        ]
    };
}