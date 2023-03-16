import ajax from "./ajax";

const BaseUrl = ''
//admin user login
export const reqLogin = (username, password) => ajax(BaseUrl + 'admin/user/login', {username, password}, 'POST')

//add admin user
export const reqAddUser = (user) => ajax(BaseUrl + 'admin/user/manage/add', user, 'POST')
