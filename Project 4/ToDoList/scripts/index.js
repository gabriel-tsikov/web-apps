window.addEventListener('DOMContentLoaded', init);

function init() {
  render(homePage());
  handleMenu();
 
}

      
async function render(innerHtml) {
  let contentDiv = document.getElementById('content');
  contentDiv.innerHTML = innerHtml;
}

async function handleMenu() {
  const loggedUser = AuthenticationService.getLoggedUser();

  const loginLink = document.getElementById('loginLink');
  const usersLink = document.getElementById('userLink');
  const contactsLink = document.getElementById('todoLink');
  const logoutLink = document.getElementById('logoutLink');

  if (loggedUser == null) {
    loginLink.style.display = '';
    usersLink.style.display = 'none';
    contactsLink.style.display = 'none';
    logoutLink.style.display = 'none';
  } else {
    loginLink.style.display = 'none';
    usersLink.style.display = loggedUser.isAdmin ? '' : 'none';
    contactsLink.style.display = '';
    logoutLink.style.display = '';
  }
}
