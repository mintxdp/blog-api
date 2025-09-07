import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.end('comment page')
})
export  {router as commentRouter};
