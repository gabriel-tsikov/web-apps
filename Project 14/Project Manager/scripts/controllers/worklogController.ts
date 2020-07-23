import { WorkLogItem, TaskItem } from "../utils/models";
import { render, modal } from "../utils/helpers";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import Task from "../enteties/Task";
import taskService from "../services/taskService";
import WorkLog from "../enteties/WorkLog";
import WorkLogService from "../services/workLogService";
import workLogService from "../services/workLogService";
import { workEdit } from "../views/components/worklog/index";
import { taskDetails } from "../views/components/tasks/index";
import { projectDetails } from "../views/components/projects/index";

function generateWork(projectId: string, currentItem: WorkLogItem, taskId: string) {
    const {id, date,time} = currentItem;
​
    const holder: HTMLElement = (document.querySelector('.work-holder') as HTMLElement);
    const worklogList: HTMLElement = (document.createElement('ul') as HTMLElement);
​
    holder.after(worklogList);
​
    worklogList.innerHTML = ` 
    <li class="task">
        <div class="task-title">
            <h1>${time}H - ${date}</h1>
            <div class="action-buttons-container">
                <a class="action-button work-edit-button" title="Edit task"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
                <a class="action-button work-delete-button" title="Delete task"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
            </div>
        </div>
    </li>`;
​       
        worklogList.querySelector('.work-edit-button')
       .addEventListener('click', () => editWork(projectId, id,taskId));
        worklogList.querySelector('.work-delete-button')
       .addEventListener('click', () => {
        if (confirm("Do u want to delete?")) {
            deleteWork(projectId, id,taskId)
        } else {
            
        }
    });  
}
​
​
​
​
export async function loadWorks(projectId:string,taskId:string): Promise<void> {
    
    render(MAIN_CONTENT_SELECTOR , taskDetails());
    const newTaskBtn:HTMLElement = (document.getElementById('workCreateBtn'));
    newTaskBtn.addEventListener('click', () => createNewWork(projectId,taskId));

    const {task, taskBox}: {task: Task; taskBox:HTMLElement; } = await generateCurrentTaskDetails(projectId, taskId);
​
    const projectHolder:HTMLElement = (document.querySelector('.task-work-holder') as HTMLElement);
    projectHolder.appendChild(taskBox);
​
    const works: Array<WorkLogItem> = await workLogService.getAll(taskId);
​
    if(!works) {
        return;
    }
​
    for(const currentTask of works) { 
        generateWork(projectId, currentTask, taskId);
    }
​
​
​
​
async function generateCurrentTaskDetails(projectId:string, taskId:string) {
    
    const task: TaskItem = await taskService.getById(projectId, taskId)
    const taskBox: HTMLElement = (document.createElement('div') as HTMLElement);
​
    taskBox.innerHTML = `
    <div class="task-proj-info">
    <h1>${task.title} - ${task.assigneeId} <span class="status">${status}</span></h1>
        <article class="task-description">${task.description}</article>
    </div>`;
    return {task, taskBox};
    }
}
​
export async function createNewWork( projectId:string,taskId:string){   
    modal(workEdit( projectId,'Create', taskId));  
    
} 
​
export async function editWork(projectId: string, id: string, taskId: string): Promise<void> {
    modal(workEdit(projectId,'Edit',taskId));
    
    const work:WorkLogItem =  await workLogService.getById(taskId,id);
    
    (document.getElementById('id')as HTMLInputElement).value = work.id;
    (document.getElementById('time')as HTMLInputElement).value = work.time;
    (document.getElementById('date')as HTMLInputElement).value = work.date;
    (document.getElementById('userId')as HTMLInputElement).value = work.userId;

    
}
​
export async function submitWorkForm(projectId:string,taskId:string): Promise<void> {
    
​
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const time: number = Number((document.getElementById('time')as HTMLInputElement).value);
    const date: string = (document.getElementById('date') as HTMLInputElement).value;
    const userId: string = (document.getElementById('userId') as HTMLInputElement).value;
    
​
    const work: WorkLog = new WorkLog (id, time,date,userId);
​
    if (id === '') {
       await workLogService.addItem(work,taskId);  
    }
     else {  
         await workLogService.editItem(work,taskId, id);
    } 
   await(loadWorks(projectId,taskId)); 
}
​
export async function deleteWork (projectId: string, id: string, taskId: string) {
    await workLogService.deleteItem(taskId,id)
​
    await loadWorks(projectId,taskId)
}
