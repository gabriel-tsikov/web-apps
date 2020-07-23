(() => {

    render(homePage());
    handleMenu();
    checkUsersRepository();

})();

async function checkUsersRepository() {
    if (await UsersRepository.count() == 0 | null) {
        seedUsers();
    }
}

async function seedUsers() {
    const initialUser = new User('admin', 'adminpass', 'Administrator', 'Administrator',1,1, true);
    await UsersRepository.addUser(initialUser);
}

function render(innerHtml) {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = innerHtml;
}

async function handleMenu() {

    let loggedUser = await AuthenticationService.getLoggedUser();
    if(loggedUser != null) {
        handleMenuUser();
        let isAdmin = loggedUser._isAdmin;

        if(isAdmin) {
            handleMenuAdmin();
        }

    } else {
        handleMenuGuest();
    }


}

function handleMenuUser() {
    menuDisplayFunction('none', '', 'none');
}

function handleMenuGuest() {
    menuDisplayFunction('', 'none', 'none');
}

function handleMenuAdmin() {
    menuDisplayFunction('none', '', '');
}

function menuDisplayFunction(displayGuest, displayUser, displayAdmin) {
    document.querySelectorAll("*[data-show='guest']").forEach(
        item => item.style.display = displayGuest);
   
    document.querySelectorAll("*[data-show='user']").forEach(
        item => item.style.display = displayUser);

    document.querySelectorAll("*[data-show='admin']").forEach(
        item => item.style.display = displayAdmin);
    
}
