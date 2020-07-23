import {MAIN_CONTENT_SELECTOR} from '../utils/constants';
import {render} from '../utils/helpers';
import TodoService from '../services/todoService'
import Task from '../entities/Task';
import {TaskItem, TodoItem} from '../utils/models';
import  TaskService from '../services/taskService';
import todoDetailPage from '../views/components/todos/todosDetail';
export async function loadTasks(listId: string)  {
    const currentTodo: TodoItem = await TodoService.getById(listId);
    const{id,updateDate, createDate, title} = currentTodo;
    render(MAIN_CONTENT_SELECTOR, todoDetailPage(title));
    const addTaskBtn:HTMLElement = (document.getElementById('add-task-button') as HTMLElement);
    addTaskBtn.addEventListener('click', () => addTask(id));
    (document.getElementById('createDate') as HTMLElement).innerHTML =  createDate;
    (document.getElementById('updateDate') as HTMLElement).innerHTML = updateDate;
    const tasks: Array<TaskItem> = await  TaskService.getAll(listId);
    const taskContainer: HTMLElement = (document.getElementById('tasks-container') as HTMLElement);
    if(!tasks){
      return;
    }
    for(const currentTask of tasks){
      const taskContent :HTMLElement = document.createElement('div');
     taskContent.innerHTML = `
      <div  class="task-item">
      <input type="checkbox" ${currentTask.isComplete ? 'checked' : ''}  disabled />
        <div class="task-info-holder">
        <p class="task-title">${currentTask.title}</p>
        <p class="task-description">${currentTask.description}</p>
        </div>
      </div>
      `;
      taskContent.querySelector('.task-item')
     .addEventListener('click', () => editTask(currentTask.id ,currentTask.id));
      taskContainer.appendChild(taskContent);
    }
}
export async function submitTaskForm(): Promise<void> {
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const taskListId: string = (document.getElementById('taskListId') as HTMLInputElement).value;
    const title: string = (document.getElementById('title') as HTMLInputElement).value;
    const description: string = (document.getElementById('description') as HTMLInputElement).value;
    const isComplete: boolean = (document.getElementById('isComplete') as HTMLInputElement).checked;
  const currenTask: Task = new Task(title,description, isComplete);
  if(id === ''){
      await  TaskService.addItem(currenTask,taskListId);
  } else{
      await  TaskService.editItem(currenTask,taskListId,id);
  }
  await loadTasks(taskListId);
  closeEdit();
}
export function addTask(taskListId: string): void{
    showEdit();
    (document.getElementById('action') as HTMLElement).innerHTML = "Add Task";
    (document.getElementById('id') as HTMLInputElement).value = "";
    (document.getElementById('taskListId') as HTMLInputElement).value = taskListId;
    (document.getElementById('title') as HTMLInputElement).value = "";
    (document.getElementById('description') as HTMLInputElement).value = "";
    (document.getElementById('isComplete') as HTMLInputElement).checked = false;
}
export async function editTask(listId: string,taskId: string): Promise<void>{
    showEdit();
    (document.getElementById('action') as HTMLElement).innerHTML = "Edit Task";
    const currentTask:TaskItem =  await  TaskService.getById(listId,taskId);
    (document.getElementById('id') as HTMLInputElement).value = currentTask.id;
    (document.getElementById('taskListId') as HTMLInputElement).value = currentTask.listId;
    (document.getElementById('title') as HTMLInputElement).value = currentTask.title;
    (document.getElementById('description') as HTMLInputElement).value = currentTask.description;
    (document.getElementById('isComplete') as HTMLInputElement).checked = currentTask.isComplete;
}
function showEdit(): void{
  var editPage: HTMLElement = document.getElementById("right-block");
  editPage.style.display="block";
}
function closeEdit(): void{
  var editPage: HTMLElement = document.getElementById("right-block");
  editPage.style.display="none";
}