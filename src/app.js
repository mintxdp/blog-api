import express from 'express'
import {userRouter} from './routes/userRoute.js'
import { postRouter } from './routes/postRoute.js';
import { commentRouter } from './routes/commentRoute.js';

const app = express()

app.use(express.json());
app.use('/users',userRouter)
app.use('/comments',commentRouter)
app.use('/posts',postRouter)

export default app;