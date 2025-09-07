import express from 'express'
import { getAllUsers, getUserById} from '../controllers/user.controller.js';
import {getPostsById} from '../controllers/post.controller.js'
const router = express.Router()

/* Goal : Pagination and sorting */

router.get('/',(req,res)=>{
    getAllUsers(req,res);
})
router.get('/:id',(req,res)=>{
    getUserById(req,res);
})
router.get('/:id/posts',(req,res)=>{
    getPostsById(req,res);
})

export {router as userRouter};