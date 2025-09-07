import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config({path:'config/.env'});

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})