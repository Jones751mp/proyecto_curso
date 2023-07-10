import { Router } from "express";
import auth from "../lib/auth.js";
import { admin } from "../controllers/admin.controller.js";


const router =  Router()

router.get("/admin",auth.esAdmin,admin.index)

router.route('/admin/edit/:id')
    .get(auth.esAdmin,admin.edit)
    .post(auth.esAdmin,admin.updateUser)




export default router;