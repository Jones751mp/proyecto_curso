import jwt from "jsonwebtoken"
import helpers from "../lib/helpers.js"
import {pool} from '../config/mysql.connection.js'
import validate from "../lib/auth.js"
export const auth = {}


auth.signup = (req,res)=> {
    const user = validate.existsUser(req)
    res.render("auth/signup",{user})
}

auth.signupValidate = async(req,res) =>{
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
            req.flash("error", "las contraseñas no son iguales")
            return res.redirect("/auth");
        }

        const newPassword = await helpers.encryptPassword(getPassword)



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

        const token = jwt.sign(newUser,"secret");
        res.cookie("session",token);
        res.redirect("/user");
    }
    catch (err) {
        console.error(err)
    }
}

auth.signin = (req,res)=> {
    const user = validate.existsUser(req)
    res.render("auth/signin",{user})
}

auth.signinValidate = async(req,res)=>{
    const { email,password } = req.body;

    if(!email || !password) {
        req.flash("error","por favor rellene todos los campos")
        return res.redirect("/auth")
    }

    const [result] = await pool.query("SELECT * FROM usuarios WHERE email = ?",[email]);

    if(result) {
        const verifyPassword = helpers.matchPassword(result[0].password);
        if(verifyPassword) {
            const token = jwt.sign(result[0],"secret");
            res.cookie("session",token);
            res.redirect("/user");
        }
    }




}