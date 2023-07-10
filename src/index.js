import express          from          'express';
import router           from          './routes/index.routes.js'
import platos           from          './routes/platos.routes.js'
import auth from './routes/auth.routes.js';
import user from './routes/user.routes.js';
import admin from './routes/admin.routes.js';
import                                'ejs'
import { resolve,join } from          'path'
import morgan           from          'morgan';
import cookieParser from 'cookie-parser';
import session      from 'express-session';
import flash        from 'connect-flash'
import multer from 'multer';

const app = express();

const __dirname = resolve()
//configuracion o settings
app.set("port",3000)
app.set("views",join(__dirname,"src/views"));
app.set("view engine",".ejs")

//midlewares ->extensiones del servidor
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
// app.use(multer({dest: join(__dirname,'./src/public/upload/temp')}).single('image'))

app.use(flash())

app.use(session({
    secret:"secret",
    saveUninitialized:false,
    resave:false
}))

//variable global
app.use((req,res,next)=>{

    app.locals.error = req.flash("error");
    app.locals.message = req.flash("message");
    next();
})
//rutas

app.use(router);
app.use('/platos',platos);
app.use(auth);
app.use(user);
app.use(admin);
//los archivos estaticos


app.use(express.static(join(__dirname,"src/public")))
app.use((req,res)=> res.render("errors/404.ejs",{user:{}}))





app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
});