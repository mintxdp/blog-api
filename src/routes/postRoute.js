import express from 'express'
import postData from '../data/posts.json' assert{type:"json"}
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(res.json(postData))
})
export  {router as postRouter};
