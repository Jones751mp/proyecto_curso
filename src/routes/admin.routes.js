import { Router } from "express";
import auth from "../lib/auth.js";
import { admin } from "../controllers/admin.controller.js";


const router =  Router()

router.get("/admin",auth.esAdmin,admin.index)

router.get('/admin/edit/:id',auth.esAdmin,admin.edit)



export default router;