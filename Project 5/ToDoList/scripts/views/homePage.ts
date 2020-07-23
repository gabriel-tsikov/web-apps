export default function homePage() {
    return {template: '<p>Welcome to your ToDo application</p> <p>Pleace login into your account</p>',listeners: []};
}
export function homePageAfterLogin(){
    return {template: '<p>LOGIN SUCCESSFUL</p>',listeners: []};
}
export function homePageAfterLogout(){
    return {template:'<p>LOGUT SUCCESSFUL</p>',listeners: [] }
}