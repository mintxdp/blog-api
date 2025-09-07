import userData from '../data/users.json' assert {type:"json"}
export default function userById(id){

    let user = userData.filter(u=>u.id==id)
    return user;

}