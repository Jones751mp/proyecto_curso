// commonJs
//const express = require('express')

// ECMA Script Module
import express from 'express';
import router from './routes/index.routes.js'
import platos from './routes/platos.routes.js'
import 'ejs'
import {resolve,join} from 'path'
const app = express();

const __dirname = resolve()
//configuracion o settings
app.set("port",3000)
app.set("views",join(__dirname,"src/views"))
app.set("view engine",".ejs")

//midlewares ->extensiones del servidor
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//variable global

//rutas

app.use(router);
app.use('/platos',platos);

//los archivos estaticos


app.use(express.static(join(__dirname,"src/public")))

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
});