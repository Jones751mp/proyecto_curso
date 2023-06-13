import { Router } from "express";
import { user } from "../controllers/user.controller.js";
import auth from "../lib/auth.js";
const router = Router();

router.get("/user",auth.activo,user.index)


export default router;