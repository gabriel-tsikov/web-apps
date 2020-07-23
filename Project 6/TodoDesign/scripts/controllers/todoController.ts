import { TodoItem, LoggedUser } from "../utils/models";
import { render } from "../utils/helpers";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import todos from "../views/pages/todos";
import todoService from "../services/todoService";

import Todo from "../entities/Todo";
import { todosEdit} from "../views/components/todos/index";
import { loadTasks } from "./taskController";
import userService from "../services/userService";
import todosShare from "../views/components/todos/todoShare";
//generate todos Rod
async function generateTodosRow(currentItem: TodoItem):Promise<HTMLElement> {
    const {id,title,createDate,updateDate} = currentItem;

    const row: HTMLElement = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${createDate}</td>
        <td>${updateDate}</td>
        <td class="action-buttons-container" colspan="2">
            <a class="action-button todo-share-button" title="Share with friends"><svg fill="#909090" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 20 0 C 17.789063 0 16 1.789063 16 4 C 16 4.277344 16.039063 4.550781 16.09375 4.8125 L 7 9.375 C 6.265625 8.535156 5.203125 8 4 8 C 1.789063 8 0 9.789063 0 12 C 0 14.210938 1.789063 16 4 16 C 5.203125 16 6.265625 15.464844 7 14.625 L 16.09375 19.1875 C 16.039063 19.449219 16 19.722656 16 20 C 16 22.210938 17.789063 24 20 24 C 22.210938 24 24 22.210938 24 20 C 24 17.789063 22.210938 16 20 16 C 18.796875 16 17.734375 16.535156 17 17.375 L 7.90625 12.8125 C 7.960938 12.550781 8 12.277344 8 12 C 8 11.722656 7.960938 11.449219 7.90625 11.1875 L 17 6.625 C 17.734375 7.464844 18.796875 8 20 8 C 22.210938 8 24 6.210938 24 4 C 24 1.789063 22.210938 0 20 0 Z"/></svg></a>    
            <a class="action-button todo-details-button" title="Show details about todo"><svg xmlns="http://www.w3.org/2000/svg" width="22.219" height="24.688" viewBox="0 0 22.219 24.688"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M22.75,3.469h-5.16a3.689,3.689,0,0,0-6.962,0H5.469A2.476,2.476,0,0,0,3,5.938V23.219a2.476,2.476,0,0,0,2.469,2.469H22.75a2.476,2.476,0,0,0,2.469-2.469V5.938A2.476,2.476,0,0,0,22.75,3.469Zm-8.641,0A1.234,1.234,0,1,1,12.875,4.7,1.238,1.238,0,0,1,14.11,3.469ZM16.578,20.75H7.938V18.282h8.641Zm3.7-4.938H7.938V13.344H20.282Zm0-4.938H7.938V8.406H20.282Z" transform="translate(-3 -1)"/></svg></a>
            <a class="action-button todo-edit-button" title="Edit todo"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
            <a class="action-button todo-delete-button" title="Delete todo"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
        </td>
    `;
    row.querySelector('.todo-details-button')
    .addEventListener('click', () => loadTasks(id));
    row.querySelector('.todo-share-button')
    .addEventListener('click', () => shareTodo(id));
    
    row.querySelector('.todo-edit-button')
    .addEventListener('click', () => editTodo(id));
    row.querySelector('.todo-delete-button')
    .addEventListener('click', () => deleteTodo(id));

  return row;

}
//displaying todo page
export async function loadTodos(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, todos());
    const todosTable: HTMLElement = (document.querySelector('#todosTable tbody') as HTMLElement);
    const items: Array<TodoItem> = await todoService.getAll();

    if (!items) {
        return;
    }

    for (const item of items) {
        todosTable.appendChild(await generateTodosRow(item));
    }
}
//crerate function
export function createNewTodo(action:string): void {
    render(MAIN_CONTENT_SELECTOR,todosEdit(action));

}

//edit function
export async function editTodo(id:string):Promise<void>{
    createNewTodo('Edit');
    const item: TodoItem = await todoService.getById(id);
    (document.getElementById('id')as HTMLInputElement).value= item.id;
    (document.getElementById('title')as HTMLInputElement).value = item.title;


}
//submit todo form page function
export async function submitTodoForm():Promise<void>{
    const id = (document.getElementById('id')as HTMLInputElement).value;
    const title = (document.getElementById('title')as HTMLInputElement).value;
        
    const item:Todo = new Todo(title);
        
        
    if (id == "") {
        await todoService.addItem(item);
    } else {
        await todoService.editItem(id,item);
        }
    
    await loadTodos();
}

export async function deleteTodo(id:string): Promise<void>{
    await todoService.deleteItem(id);
    await loadTodos();
}
function shareTodo(id:string){
    render(MAIN_CONTENT_SELECTOR, todosShare());
    (document.getElementById('listId') as HTMLInputElement).value = id;
  }
  export async function saveShareForm(): Promise<void> {
    const userId: string = (document.getElementById('userId') as HTMLInputElement).value;
    const listId: string =(document.getElementById('listId') as HTMLInputElement).value;
    await todoService.shareItem(userId, listId);
    loadTodos()
  }


  
