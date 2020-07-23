import { loadProjects } from "../../../controllers/projectsController";
import { logout } from "../../../controllers/loginController";
import { loadUsers } from "../../../controllers/usersController";
import { loadTeams } from "../../../controllers/teamsController";

export default function navigation() {
    return {template:
        `
        <div class="nav-container">
        
            <div class="logo">
                <a class="image-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16.696" viewBox="0 0 24 16.696"><path class="a" d="M19.8,4H15.63L7.4,17.179,4.674,12.348,9.37,4H5.2L.5,12.348,5.2,20.7H9.37L17.6,7.517l2.723,4.831L15.63,20.7H19.8l4.7-8.348Z" transform="translate(-0.5 -4)"/></svg>

                </a>
                <a class="logo-title">
                    <span>AppStack</span>
                </a>
            </div>
            <div class= "side-menu">
                <ul>
                    <li  id="projectsLink" class="nav-item"><a class="nav-link"><img src="scripts/views/pictures/ic_home_24px.svg" alt="">Projects</a></li>
                    <li  id="usersLink" class="nav-item"><a class="nav-link"><img src="scripts/views/pictures/ic_people_24px.svg" alt="">Users</a></li>
                    <li  id="teamsLink" class="nav-item"><a class="nav-link"><img src="scripts/views/pictures/ic_assignment_ind_24px.svg" alt="">Teams</a></li> 
                    <li  id="logoutLink" class="nav-item"><a class="nav-link"><img id="signOut" src="scripts/views/pictures/logout.png" alt="">Sign Out</a></li> 
                </ul>
            </div>
        </div>
        `,
        listeners: [
            {
                targetId: "projectsLink",
                eventType: 'click',
                callback:   loadProjects
            },
            {
                targetId: "usersLink",
                eventType: 'click',
                callback:   loadUsers
            },
            {
                targetId: "teamsLink",
                eventType: 'click',
                callback: loadTeams
            },
            {
                targetId: "logoutLink",
                eventType: 'click',
                callback: logout
            }         
        ]
    };
}
