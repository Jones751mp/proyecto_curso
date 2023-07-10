import { Router } from "express";
import { auth } from '../controllers/auth.controller.js'
import validar from '../lib/auth.js'


const router = Router() ;

router.route("/registrarse")
    .get(validar.inactivo,auth.signup)
    .post(auth.signupValidate)

router.route("/ingresar")
    .get(validar.inactivo,auth.signin)
    .post(validar.inactivo,auth.signinValidate)




export default router;