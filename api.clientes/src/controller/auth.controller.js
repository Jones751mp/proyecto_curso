import jwt from "jsonwebtoken"
import helpers from "../lib/helpers.js"
import { pool } from '../config/mysql.connection.js'


export const auth = {}

auth.status = {
    message: "",
    autorizado: false
}

auth.signupValidate = async(req,res) =>{
    // return res.send("formulario en mantenimieto").redirect("/")
    try {
        const {
            nombre,
            apellido,
            email,
            f_nacimiento,
            telefono,
            password,
            confirmPassword
        } = req.body;

        if (password != confirmPassword) {
            auth.status.message = "las contraseñas no son iguales"
            return res.json(auth.status);
        }

        const newPassword = await helpers.encryptPassword(password)



        const newUser = {
            nombre,
            apellido,
            email,
            f_nacimiento,
            telefono,
            password
        }
        newUser.password = newPassword

        const [result] = await pool.query("INSERT INTO usuarios SET ?", [newUser]);
        newUser.id = result.insertId
        newUser.tipo_usuario = 1;

        const token = jwt.sign(newUser,"secret");
        res.cookie("session",token);
        auth.status.message = "Bienvenido";
        auth.status.autorizado = true;
        res.json(auth.status);
    }
    catch (err) {
        console.error(err)
        req.flash("error","no se pudo realizar el registro")
        return res.redirect("/registrarse")
    }
}



auth.signinValidate = async(req,res)=>{
    console.log("entre")
    try {
        const { email,password } = req.body;
        console.log(email,password);
    // return res.send("ingresar esta en mantenimiento").redirect("/")
    if(!email || !password) {
        auth.status.message = "rellene todos los campos"
        return res.json(auth.status);
    }

    const [result] = await pool.query("SELECT * FROM usuarios WHERE email = ?",[email]);

    if(result) {
        const verifyPassword = helpers.matchPassword(result[0].password);
        if(verifyPassword) {
            const token = jwt.sign(result[0],"secret");
            auth.status.message = "bienvenido";
            auth.status.autorizado
            res.cookie("session",token);
            res.json(auth.status);
        }
    }

    } catch(err) {
        console.error(err)
        auth.status.message = "el usuario no se encuentra registrado";
        return res.json(auth.status);
    }
}

