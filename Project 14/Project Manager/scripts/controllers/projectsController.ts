import { render, modal } from "../utils/helpers";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import { ProjectItem, LoggedUser } from "../utils/models";
import projectService from "../services/projectService";
import projects from "../views/pages/projects";
import Project from "../enteties/Project";
import { projectEdit, projectTeams } from "../views/components/projects/index";
import { loadTasks } from "./tasksController";
import userService from "../services/userService";
import AuthenticationService from "../services/authenticationService";

function generateProjectInfo(currentItem:ProjectItem): HTMLDivElement{
    const {id,title,description} = currentItem;
    const loggedUser = AuthenticationService.getLoggedUser();
    const box: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    box.className="project-box";
    box.innerHTML = `
    <div class="prop-box">
        <div class="project-content">
            <div class="project-header">
                <h1>${title}</h1>
                <div class="buttons">
                    <a class="action-button team-add-button" title="Add member"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="19.118" viewBox="0 0 24 19.118"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M16.273,13.559a4.585,4.585,0,0,0,4.364-4.78A4.585,4.585,0,0,0,16.273,4a4.585,4.585,0,0,0-4.364,4.78A4.585,4.585,0,0,0,16.273,13.559Zm-9.818-2.39V7.585H4.273v3.585H1v2.39H4.273v3.585H6.455V13.559H9.727v-2.39Zm9.818,4.78c-2.913,0-8.727,1.6-8.727,4.78v2.39H25v-2.39C25,17.55,19.185,15.949,16.273,15.949Z" transform="translate(-1 -4)"/></svg></a>
                    <a class="action-button edit-project-button" title="Edit project"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
                    <a class="action-button delete-project-button" title="delete project"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
                </div>
            </div>
            <p>${description}</p>
        </div>
    </div>
    `;
    box.querySelector('.prop-box')
    .addEventListener('click', () => loadTasks(id));
    box.querySelector('.team-add-button')
    .addEventListener('click', (e) => {
        e.stopPropagation();
        addTeam(id);
        
    });
    
    box.querySelector('.edit-project-button')
    .addEventListener('click', (e) => {
        e.stopPropagation();
        editProject(id);
    });
    box.querySelector('.delete-project-button')
    .addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm("Do u want to delete?")) {
            deleteProject(id);
        } else {
            
        }
        
    });

    return box;

}
export async function loadProjects(): Promise<void>{
    render(MAIN_CONTENT_SELECTOR, projects());
    const projectsBoxes: HTMLDivElement = document.querySelector('.project-holder')as HTMLDivElement ;
    const items: Array<ProjectItem> = await projectService.getAll();
    
    if (!items) {
        return;
    }

    for (const item of items) {
        projectsBoxes.appendChild(generateProjectInfo(item));
    }
}

export function createNewProject(action:string): void {
    modal(projectEdit(action));
}


export async function editProject(id:string): Promise<void> {
    createNewProject('Edit');
    const project: ProjectItem = await projectService.getById(id);

    (document.getElementById('id')as HTMLInputElement).value = project.id;
    (document.getElementById('title')as HTMLInputElement).value = project.title;
    (document.getElementById('description')as HTMLInputElement).value = project.description;
}

export async function submitProjectForm(): Promise<void> {
    const id: string = (document.getElementById('id')as HTMLInputElement).value;
    const title: string = (document.getElementById('title')as HTMLInputElement).value;
    const description: string = (document.getElementById('description')as HTMLInputElement).value;

    const project: Project = new Project(id,title,description);
    if (id === '') {
        await projectService.addItem(project)
    } else {
        await projectService.editItem(project);
    }

    await loadProjects();
}

export async function deleteProject(id:string): Promise<void> {
    await projectService.deleteItem(id);

    await loadProjects();
}
export async function addTeam(id:string): Promise<void> {
    modal(projectTeams());
    const item: ProjectItem = await projectService.getById(id);
    (document.getElementById('projectId')as HTMLInputElement).value = item.id;

}
export async function addProjectTeam(): Promise<void> {
    const projectId: string = (document.getElementById('projectId')as HTMLInputElement).value;
    const teamId: string = (document.getElementById('teamId')as HTMLInputElement).value;
    

    await projectService.addTeamTOProject(projectId,teamId);
    
}


