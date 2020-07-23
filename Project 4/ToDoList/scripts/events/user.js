async function usersLink_Click() {

    render(usersPage());
    const usersTable = document.getElementById('usersTable');

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
        
        const childAppend = [userIdTd,usernameTd,passwordTd,firstNameTd,lastNameTd,isAdminTd,createdTd,creatorIdTd,updateTd,lastChangeUserIdTd,editTd,deleteTd];
        for (let j = 0; j < childAppend.length; j++) {
            tr.appendChild(childAppend[j]);
        }
        usersTable.appendChild(tr);
    }
}

async function usersEditLink_Click() {
    await render(usersEditPage());

}

async function usersEditButton_Click(id) {

    await usersEditLink_Click();
    const item = await UsersRepository.getById(id);

    document.getElementById('id').value = item.id;
    document.getElementById('username').value = item.username;
    document.getElementById('password').value = item.password;
    document.getElementById('firstName').value = item.firstName;
    document.getElementById('lastName').value = item.lastName;
    document.getElementById('isAdmin').checked = item.isAdmin;
    
    
    
}

async function usersEditForm_Submit() {

    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const isAdmin = document.getElementById('isAdmin').checked;

    
    const item = new User(username, password, firstName, lastName, isAdmin);
    
       
    if (id == "") {
        await UsersRepository.addItem(item);
    } else {
        await UsersRepository.editItem(id, item);
    
    }

    await usersLink_Click();
}

async function usersDeleteButton_Click(id) {
    await UsersRepository.deleteItem(id);
    await usersLink_Click();

}


async function loginLink_Click() {
    await render(loginPage());
}

async function loginForm_Submit() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await AuthenticationService.authenticate(username, password);
    const loggedUser = await AuthenticationService.getLoggedUser();

    if (loggedUser != null) {
        render(homePageAfterLogin());
        handleMenu();
    } else {
        document.getElementById('error').innerHTML = "User doesn't exist";
    }
}

async function logoutLink_Click() {

    await AuthenticationService.logout();
    handleMenu();
    render(homePageAfterLogout());
}

