import { Router } from "express";

import validar from '../lib/auth.js'


const router = Router();

router.get('/ingresar', (req,res)=> {
    const user = validar.existsUser(req)
    res.render("auth/signup",{user})
});

router.get('/registrarse', (req,res)=> {
    const user = validar.existsUser(req)
    res.render("auth/signin",{user})
})


export default router;