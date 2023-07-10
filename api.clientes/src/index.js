import express from 'express';
import morgan from 'morgan'
import auth from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(morgan('dev'))
app.use(express.json())

app.use(cookieParser)

app.use(auth);



app.listen(4000,()=>{
    console.log("api.client run server in port 4000")
})