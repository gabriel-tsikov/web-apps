async function usersLink_Click() {

    await render(usersPage());
    const usersTable = document.getElementById('usersTable');

    const items = await UsersRepository.getAll();
    if (items == null)
        return;

    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

        const tr = document.createElement('TR');

        const userIdTd = document.createElement('TD');
        userIdTd.innerHTML = currentItem._id;

        const usernameTd = document.createElement('TD');
        usernameTd.innerHTML = currentItem._username;

        const passwordTd = document.createElement('TD');
        passwordTd.innerHTML = currentItem._password;

        const firstNameTd = document.createElement('TD');
        firstNameTd.innerHTML = currentItem._firstName;

        const lastNameTd = document.createElement('TD');
        lastNameTd.innerHTML = currentItem._lastName;

        const isAdminTd = document.createElement('TD');
        isAdminTd.innerHTML = currentItem._isAdmin;

        const createdTd = document.createElement('TD');
        createdTd.innerHTML = currentItem._created;

        const creatorIdTd = document.createElement('TD');
        creatorIdTd.innerHTML = currentItem._creatorId;

        const updateTd = document.createElement('TD');
        updateTd.innerHTML = currentItem._updated;

        const lastChangeUserIdTd = document.createElement('TD');
        lastChangeUserIdTd.innerHTML = currentItem._lastChangeUserId;

        
        const editTd = document.createElement('TD');
        const editButton = document.createElement('BUTTON');
        editButton.innerHTML = 'EDIT';
        editButton.addEventListener('click', () => usersEditButton_Click(currentItem._id));
        editTd.appendChild(editButton);
        

        const deleteTd = document.createElement('TD');
        const deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = 'DELETE';
        deleteButton.addEventListener('click', () => usersDeleteButton_Click(currentItem._id));
        deleteTd.appendChild(deleteButton);
        
        
        const childAppend = [userIdTd,usernameTd,passwordTd,firstNameTd,lastNameTd,isAdminTd,createdTd,creatorIdTd,updateTd,lastChangeUserIdTd,editTd,deleteTd];
        for (let j = 0; j < childAppend.length; j++) {
            tr.appendChild(childAppend[j]);
        }
        usersTable.appendChild(tr);
    }
}

async function usersEditLink_Click() {
    const loggedUser = await AuthenticationService.getLoggedUser();
    await render(usersEditPage());
    document.getElementById('creator').value = loggedUser._id;
    document.getElementById('lastChangeUserId').value = loggedUser._id;
}

async function usersEditButton_Click(id) {

    await usersEditLink_Click();
    const item = await UsersRepository.getById(id);

    document.getElementById('id').value = item._id;
    document.getElementById('username').value = item._username;
    document.getElementById('password').value = item._password;
    document.getElementById('firstName').value = item._firstName;
    document.getElementById('lastName').value = item._lastName;
    document.getElementById('isAdmin').checked = item._isAdmin;
    document.getElementById('creator').value = item._cretorId;
    document.getElementById('lastChangeUserId').value = item._lastChangeUserId;
    
    
}

async function usersEditForm_Submit() {
    const loggedUser = await AuthenticationService.getLoggedUser();

    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const isAdmin = document.getElementById('isAdmin').checked;
    const creatorId = document.getElementById('creator').value ;
    const lastChangeUserId = loggedUser._id;

    
    const item = new User(username, password, firstName, lastName, creatorId, lastChangeUserId, isAdmin);
    
       
    if (id == "") {
        await UsersRepository.addUser(item);
    } else {
        await UsersRepository.editUser(id, item);
    
    }

    await usersLink_Click();
}

async function usersDeleteButton_Click(id) {
    if(id !=1){
    await UsersRepository.deleteUser(id);
    await usersLink_Click();
    }else alert("You cannot delete main Administrator");
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

