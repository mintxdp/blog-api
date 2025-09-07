import userData from '../data/users.json' assert {type: "json"};
import userById from '../utils/userById.js';

const getAllUsers = (req, res) => {
    res.send(userData)
    /* Implement full-fleged route which accepts query parameter and has pagination and sorting feature. */
}
const getUserById=(req,res) => {
    const Id = parseInt(req.params.id)
   let user = userData.find(usr=>usr.id===Id)
    res.send(res.json(user));
}

const getUserPosts = (req,res)=>{

}

export {getAllUsers,getUserById}