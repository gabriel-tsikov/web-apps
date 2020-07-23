import {Listener} from './models';
import UsersRepository from './repositories/userRepository';
import {usersPage,usersEditPage} from './views/users/'
import User from './entities/user';
import { todoTaskPage,toDoPage,toDoEditPage} from './views/todos';
import AuthenticationService from './authentification';
import TasksRepository from './repositories/tasksRepository';
import Task from './entities/task';
import ToDoRepository from './repositories/toDoRepository';
import {tasksEditPage} from './views/tasks/index'
import ToDo from './entities/ToDo';
import homePage, { homePageAfterLogin, homePageAfterLogout } from './views/homePage';
import loginPage from './views/loginPage';


export function render(renderData: {template: string, listeners: Listener[]}): void {
    const contentDiv = document.getElementById('content') as HTMLElement;
    contentDiv.innerHTML = renderData.template;
  
    if (renderData && renderData.listeners && renderData.listeners.length) {
      for (const listener of renderData.listeners) {
        const target = document.getElementById(listener.targetId);
        target.addEventListener(listener.eventType, listener.callback);
      }
    }
    
  }
  
  export function handleMenu(): void {
    const loggedUser = AuthenticationService.getLoggedUser();
  
    
    const homeLink = (document.getElementById('homeLink') as HTMLElement);
    homeLink.addEventListener('click', homeLink_Click);
  
    const loginLink = (document.getElementById('loginLink') as HTMLElement);
    loginLink.addEventListener('click',loginLink_Click);
  
    const usersLink = (document.getElementById('usersLink') as HTMLElement);
    usersLink.addEventListener('click', usersLink_Click);
  
    const todoLink = (document.getElementById('todoLink') as HTMLElement);
    todoLink.addEventListener('click', toDosLink_Click);
  
    const logoutLink = (document.getElementById('logoutLink') as HTMLElement);
    logoutLink.addEventListener('click', logoutLink_Click);
  
    if (loggedUser == null) {
      loginLink.style.display = '';
      usersLink.style.display = 'none';
      todoLink.style.display = 'none';
      logoutLink.style.display = 'none';
    } else {
      loginLink.style.display = 'none';
      usersLink.style.display = loggedUser.isAdmin ? '' : 'none';
      todoLink.style.display = '';
      logoutLink.style.display = '';
    }
  }
  
  


export function homeLink_Click() {
    render(homePage());
}
//loadTodos
export async function toDosLink_Click() {
    render(toDoPage());
    const toDoTable = document.getElementById('toDoTable') as HTMLElement;
    const items = await ToDoRepository.getAll();

    if (items == null)
        return;
        
    for (let i = 0; i < items.length; i++) {
        
        const currentItem = items[i];
        
        const tr = document.createElement('TR');

        const listIdTd = document.createElement('TD');
        listIdTd.innerHTML = currentItem.id;

        const titleTd = document.createElement('TD');
        titleTd.innerHTML = currentItem.title;

        const createdTd = document.createElement('TD');
        createdTd.innerHTML = currentItem.createDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem.creatorId;

        const updateTd = document.createElement('TD');
        updateTd.innerHTML = currentItem.updateDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentItem.updaterId;


        const editTd = document.createElement('TD');
        const editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () =>  toDoEditButton_Click(currentItem.id));
        editTd.appendChild(editButton);

        const TasksTd = document.createElement('TD');
        const TasksButton = document.createElement('BUTTON');
        TasksButton.innerHTML = 'TASKS';
        TasksButton.addEventListener('click', () => toDoTasksButton_Click(currentItem.id));
        TasksTd.appendChild(TasksButton);
        
        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => toDoDeleteButton_Click(currentItem.id));
        deleteTd.appendChild(deleteButton);
        const childAppend = [listIdTd,titleTd,createdTd,creatorIdTd,updateTd,lastChangeUserIdTd,editTd,TasksTd,deleteTd];
        
        for (let j = 0; j < childAppend.length; j++) {
            tr.appendChild(childAppend[j]);
            
        }
        
        toDoTable.appendChild(tr);
        
        
    }
}

export async function toDoEditLink_Click() {
        render(toDoEditPage());
}

export async function toDoEditButton_Click(id:string) {
    await toDoEditLink_Click();
    const item = await ToDoRepository.getById(id);
    
    
    (document.getElementById('id')as HTMLInputElement).value = item.id;
    (document.getElementById('title')as HTMLInputElement).value = item.title;
    
}
export async function toDoDeleteButton_Click(id:string) {
    await ToDoRepository.deleteItem(id);
    await toDosLink_Click();
        
}

export async function toDosEditForm_Submit(){
    const id = (document.getElementById('id')as HTMLInputElement).value;
    const title = (document.getElementById('title')as HTMLInputElement).value;
        
    const item = new ToDo(title);
        
        
    if (id == "") {
        await ToDoRepository.addItem(item);
    } else {
        await ToDoRepository.editItem(id,item);
        }
    
        await toDosLink_Click();
    }




export async function toDoTasksButton_Click(id:string){
    render(todoTaskPage());
    const newTaskBtn =( document.getElementById('newTaskLink')as HTMLElement);
    newTaskBtn.addEventListener('click', () => tasksEditLink_Click(id));
    

    const tasksTable = document.getElementById('TasksTable');
    const tasks = await TasksRepository.getAll(id);
        
    if (tasks == null || undefined || 0 )
        return;

    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];

        const tr = document.createElement('TR');
        
        const taskIdTd = document.createElement('TD');
        taskIdTd.innerHTML = currentTask.id;

        const listIdTd = document.createElement('TD');
        listIdTd.innerHTML = currentTask.taskListId;

        const taskTd = document.createElement('TD');
        taskTd.innerHTML = currentTask.title;


        const descriptionTd = document.createElement('TD');
        descriptionTd.innerHTML = currentTask.description;

        const creationDateTd = document.createElement('TD');
        creationDateTd.innerHTML = currentTask.creationDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentTask.creatorId;

        const lastChangeDateTd = document.createElement('TD');
        lastChangeDateTd.innerHTML = currentTask.updateDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentTask.updaterId;

        const isCompleteTd = document.createElement('TD');
        isCompleteTd.innerHTML = currentTask.isComplete;

        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () =>tasksEditButton_Click(currentTask.taskListId, currentTask.id));
        editTd.appendChild(editButton);

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => tasksDeleteButton_Click(currentTask.taskListId,currentTask.id));
        deleteTd.appendChild(deleteButton);
        const taskToAppend = [taskIdTd,listIdTd,taskTd,descriptionTd,creationDateTd,creatorIdTd,lastChangeDateTd,
            lastChangeUserIdTd,isCompleteTd,editTd,deleteTd];
        for(let k=0;k<taskToAppend.length; k++){
            tr.appendChild(taskToAppend[k]);
        }
        tasksTable.appendChild(tr);

    }
}

export async function tasksEditLink_Click(id:string) {
    render(tasksEditPage());
    (document.getElementById('todoId')as HTMLInputElement).value = id;
}
    
export async function tasksEditButton_Click(listId: string,id:string) {
    render(tasksEditPage());
    const item = await TasksRepository.getById(listId, id);
    
    (document.getElementById('id')as HTMLInputElement).value = item.id;
    (document.getElementById('todoId')as HTMLInputElement).value = item.taskListId;
    (document.getElementById('task')as HTMLInputElement).value = item.title;
    (document.getElementById('description')as HTMLInputElement).value = item.description;
    (document.getElementById('isComplete')as HTMLInputElement).checked = item.isComplete;
    
}
    
export async function taskEditForm_Submit() {
    const id = (document.getElementById('id')as HTMLInputElement).value;
    const todoId = (document.getElementById('todoId')as HTMLInputElement).value;
    const task = (document.getElementById('task')as HTMLInputElement).value;
    const description = (document.getElementById('description')as HTMLInputElement).value;
    const isComplete = (document.getElementById('isComplete')as HTMLInputElement).checked;
    
    const item = new Task(task, description, isComplete);
    
    if (id == "") {
           
        await TasksRepository.addItem(item,todoId);
    } else {
        await TasksRepository.editItem(item, todoId, id);
    }
    
    await toDoTasksButton_Click(todoId);
}
    
export async function tasksDeleteButton_Click(listId:any,id:string) {
    await TasksRepository.deleteItem(listId,id);
    await toDoTasksButton_Click(listId);
}
export async function usersLink_Click() {

    render(usersPage());
    const usersTable = document.getElementById('usersTable') as HTMLElement;

    const items = await UsersRepository.getAll();
    if (items == null)
        return;

    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

        const tr = document.createElement('TR');

        const userIdTd = document.createElement('TD');
        userIdTd.innerHTML = currentItem.id;

        const usernameTd = document.createElement('TD');
        usernameTd.innerHTML = currentItem.username;

        const passwordTd = document.createElement('TD');
        passwordTd.innerHTML = currentItem.password;

        const firstNameTd = document.createElement('TD');
        firstNameTd.innerHTML = currentItem.firstName;

        const lastNameTd = document.createElement('TD');
        lastNameTd.innerHTML = currentItem.lastName;

        const isAdminTd = document.createElement('TD');
        isAdminTd.innerHTML = currentItem.isAdmin;

        const createdTd = document.createElement('TD');
        createdTd.innerHTML = currentItem.createDate;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem.creatorId;

        const updateTd = document.createElement('TD');
        updateTd.innerHTML = currentItem.updateDate;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentItem.updaterId;

        
        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () => usersEditButton_Click(currentItem.id));
        editTd.appendChild(editButton);
        

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => usersDeleteButton_Click(currentItem.id));
        deleteTd.appendChild(deleteButton);
        const usersToAppend = [userIdTd,usernameTd,passwordTd,firstNameTd,lastNameTd,isAdminTd,createdTd,creatorIdTd,updateTd,lastChangeUserIdTd,
            editTd,deleteTd];
        for(let e = 0; e < usersToAppend.length; e++) {
            tr.appendChild(usersToAppend[e]);
        }

        usersTable.appendChild(tr);
    }
}

export async function usersEditLink_Click() {
     render(usersEditPage());

}

export async function usersEditButton_Click(id:string) {

    await usersEditLink_Click();
    const item = await UsersRepository.getById(id);

    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('username') as HTMLInputElement).value = item.username;
    (document.getElementById('password') as HTMLInputElement).value = item.password;
    (document.getElementById('firstName')as HTMLInputElement).value = item.firstName;
    (document.getElementById('lastName')as HTMLInputElement).value = item.lastName;
    (document.getElementById('isAdmin')as HTMLInputElement).checked = item.isAdmin;
    
    
    
}

export async function usersEditForm_Submit() {

    const id = (document.getElementById('id')as HTMLInputElement).value;
    const username = (document.getElementById('username')as HTMLInputElement).value;
    const password = (document.getElementById('password')as HTMLInputElement).value;
    const firstName = (document.getElementById('firstName')as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName')as HTMLInputElement).value;
    const isAdmin = (document.getElementById('isAdmin')as HTMLInputElement).checked;

    
    const item = new User(username, password, firstName, lastName, isAdmin);
    
       
    if (id == "") {
        await UsersRepository.addItem(item);
    } else {
        await UsersRepository.editItem(id, item);
    
    }

    await usersLink_Click();
}

export async function usersDeleteButton_Click(id: string) {
    await UsersRepository.deleteItem(id);
    await usersLink_Click();

}


export async function loginLink_Click() {
    await render(loginPage());
}

export async function loginForm_Submit() {

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password')as HTMLInputElement).value;

    await AuthenticationService.authenticate(username, password);
    const loggedUser = await AuthenticationService.getLoggedUser();

    if (loggedUser != null) {
        render(homePageAfterLogin());
        handleMenu();
    } else {
        document.getElementById('error').innerHTML = "User doesn't exist";
    }
}

export async function logoutLink_Click() {

    await AuthenticationService.logout();
    handleMenu();
    render(homePageAfterLogout());
}
    