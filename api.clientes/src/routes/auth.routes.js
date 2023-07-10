import { Router } from "express";
import { auth } from "../controller/auth.controller.js";
import validar from '../lib/auth.js';


const router = Router() ;

router.post("/registrarse",auth.signupValidate);

router.post("/ingresar",validar.inactivo,auth.signinValidate);




export default router;