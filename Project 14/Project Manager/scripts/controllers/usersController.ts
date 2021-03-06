import { UserItem } from "../utils/models";
import { render, modal } from "../utils/helpers";
import { MAIN_CONTENT_SELECTOR } from "../utils/constants";
import userService from "../services/userService";
import User from "../enteties/User";
import users from "../views/pages/users";
import { usersEdit } from "../views/components/users/index";

function generetaUsersTable(currentItem: UserItem): HTMLElement {
    const {id,username,firstName,lastName} = currentItem;

    const row: HTMLElement = document.createElement('tr');
    row.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${username}</td>
      <td class="action-buttons-container" colspan="2">
        <a class="action-button user-edit-button" title="Edit user"><svg xmlns="http://www.w3.org/2000/svg" width="21.288" height="20.985" viewBox="0 0 21.288 20.985"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M3,19.611v4.371H7.434L20.513,11.09,16.078,6.719ZM23.942,7.71a1.149,1.149,0,0,0,0-1.644L21.175,3.338a1.19,1.19,0,0,0-1.667,0L17.344,5.472l4.434,4.371L23.942,7.71Z" transform="translate(-3 -2.997)"/></svg></a>
        <a class="action-button user-delete-button" title="Delete user"><svg xmlns="http://www.w3.org/2000/svg" width="18.92" height="23.313" viewBox="0 0 18.92 23.313"><defs><style>.a{fill:#909090;}</style></defs><path class="a" d="M6.351,23.723a2.656,2.656,0,0,0,2.7,2.59H19.866a2.656,2.656,0,0,0,2.7-2.59V8.181H6.351ZM23.92,4.3H19.19L17.839,3H11.081L9.73,4.3H5v2.59H23.92Z" transform="translate(-5 -3)"/></svg></a>
      </td>
    `;
    row.querySelector('.user-edit-button')
    .addEventListener('click', () => editUser(id));
    row.querySelector('.user-delete-button')
    .addEventListener('click', () => {
        if (confirm("Do u want to delete?")) {
           deleteUser(id);
        } else {
            
        }});

    return row;
}

export async function loadUsers(): Promise<void> {
    render(MAIN_CONTENT_SELECTOR, users());

    const usersTable: HTMLElement = document.getElementById('usersTable')as HTMLElement;
    const items: Array<UserItem> = await userService.getAll();

    if (!items) {
        return;
    }

    for (const item of items) {
        usersTable.appendChild(generetaUsersTable(item));
    }
}

export function createNewUser(action: string): void{
    modal(usersEdit(action));
}

export async function editUser(id: string): Promise<void> {
    modal( usersEdit('Edit'));
    const item: UserItem = await userService.getById(id);
    (document.getElementById('id') as HTMLInputElement).value = item.id;
    (document.getElementById('username') as HTMLInputElement).value = item.username;
    (document.getElementById('password') as HTMLInputElement).value = item.password;
    (document.getElementById('firstName') as HTMLInputElement).value = item.firstName;
    (document.getElementById('lastName') as HTMLInputElement).value = item.lastName;
    (document.getElementById('isAdmin')as HTMLInputElement).checked = item.isAdmin;
}

export async function submitUserForm(): Promise<void> {
    const id: string = (document.getElementById('id') as HTMLInputElement).value;
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName: string = (document.getElementById('lastName') as HTMLInputElement).value;
    const isAdmin: boolean = (document.getElementById('isAdmin')as HTMLInputElement).checked;

    const item: User = new User(id,username, password, firstName, lastName, isAdmin);


    if (id === '') {
        await userService.addItem(item);
    } else {
        await userService.editItem(item);
    }

    await loadUsers();
}

async function deleteUser(id: string): Promise<void> {
    await userService.deleteItem(id);
    await loadUsers();
}