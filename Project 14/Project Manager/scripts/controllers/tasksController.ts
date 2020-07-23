import { TaskItem, ProjectItem } from "../utils/models";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import { render, modal } from "../utils/helpers";
import { projectDetails } from "../views/components/projects/index";
import TaskService from "../services/taskService";
import Project from "../enteties/Project";
import projectService from "../services/projectService";
import taskService from "../services/taskService";
import { taskEdit } from "../views/components/tasks/index";
import Task from "../enteties/Task";
import { loadWorks } from "./worklogController";

function generateTask(currentItem: TaskItem, projectId: string) {
    const {id, title, description, status, assigneeId} = currentItem;
​
    const holder: HTMLElement = (document.querySelector('.task-holder') as HTMLElement);
    const taskList: HTMLElement = (document.createElement('ul') as HTMLElement);
​    
    holder.after(taskList);
​
    taskList.innerHTML = ` 
    <div class="task-click">
        <li class="task">
            <div class="task-title">
                <h1>${title} - ${assigneeId} <a class="status">${status}</a></h1>
                <div class="action-buttons-container">
                    <a class="action-button task-edit-button" title="Edit task"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
                    <a class="action-button task-delete-button" title="Delete task"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
                </div>
            </div>
            <article id="task-description">${description}</article>
        </li>
    </div>`;
​    taskList.querySelector('.task-click')
    .addEventListener('click', () => loadWorks(projectId,id));
    taskList.querySelector('.task-edit-button')
    .addEventListener('click', (e) => {
        e.stopPropagation();
        editTasks(id,projectId)});
    taskList.querySelector('.task-delete-button')
    .addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm("Do u want to delete?")) {
            deleteTask(id, projectId)
        } else {
        }
    });
    const taskStatus: HTMLElement = (document.getElementById('.status')as HTMLElement);
    taskStatus.textContent = currentItem.status;
    if (status == 'Completed') {
        taskStatus.classList.add('completed');
    } else if (status == 'In Progress') {
        taskStatus.classList.add('in-progress');
    } else {
        taskStatus.classList.add('pending');
    }
}
​
​
​
​
export async function loadTasks(id:string): Promise<void> {
    render(MAIN_CONTENT_SELECTOR , projectDetails());
    const newTaskBtn:HTMLElement = (document.getElementById('taskCreateBtn'));
    newTaskBtn.addEventListener('click', () => createNewTask(id, 'Create'));

    const {project, projectBox}: {project: Project; projectBox:HTMLElement; } = await generateCurrentProjectDetails();
​
    const projectHolder:HTMLElement = (document.querySelector('.task-project-holder') as HTMLElement);
    projectHolder.appendChild(projectBox);
​
    const tasks: Array<TaskItem> = await taskService.getAll(project.id);
​
    if(!tasks) {
        return;
    }
​
    for(const currentTask of tasks) { 
        generateTask(currentTask, id);
    }
​
​
​
​
async function generateCurrentProjectDetails() {
    
    const project: Project = await projectService.getById(id);
    const projectBox: HTMLElement = (document.createElement('div') as HTMLElement);
​
    projectBox.innerHTML = `
    <div class="task-proj-info">
        <h3 class="proj-title">${project.title}</h3>
        <article class="proj-description">${project.description}</article>
    </div>`;
    return {project, projectBox};
    }
}
​
export async function createNewTask(projectId:string, action: string){   
    modal(taskEdit(action));  
    
    (document.getElementById('projectId') as HTMLInputElement).value = projectId;
    
} 
​
export async function editTasks(id: string, projecId: string): Promise<void> {
    modal(taskEdit('Edit'));
    
    const task:TaskItem =  await taskService.getById(id, projecId);
    
    (document.getElementById('id')as HTMLInputElement).value = task.id;
    (document.getElementById('projectId') as HTMLInputElement).value = task.projectId;
    (document.getElementById('title') as HTMLInputElement).value = task.title;
    (document.getElementById('description') as HTMLInputElement).value = task.description;
    (document.getElementById('status') as HTMLInputElement).value = task.status;
    (document.getElementById('assigneeId') as HTMLInputElement).value = task.assigneeId;
}
​
export async function submitTaskForm(): Promise<void> {
​
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const projecId: string = (document.getElementById('projectId')as HTMLInputElement).value;
    const title: string = (document.getElementById('title') as HTMLInputElement).value;
    const description: string = (document.getElementById('description') as HTMLInputElement).value;
    const status: string =(document.getElementById('status')as HTMLInputElement).value;
    const assigneeId: string = (document.getElementById('assigneeId')as HTMLInputElement).value;
​
    const task: Task = new Task (id, projecId, title, description, status, assigneeId)
​
    if (id === '') {
       await taskService.addItem(task,projecId);  
    }
     else {
         
         await taskService.editItem(task,projecId,id);
    } 
   await(loadTasks(projecId)); 
}
​
export async function deleteTask (id: string, projectId: string) {
    await taskService.deleteItem(id, projectId)
​
    await loadTasks(projectId)
}