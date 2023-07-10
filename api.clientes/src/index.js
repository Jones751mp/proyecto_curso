import express from 'express';
import morgan from 'morgan'
import auth from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser)

app.use(session({
    secret:"secret",
    saveUninitialized:false,
    resave:false
}))


app.use((req,res,next) => {

    next()
})


app.use(auth);




app.listen(4000,()=>{
    console.log("api.client run server in port 4000")
})