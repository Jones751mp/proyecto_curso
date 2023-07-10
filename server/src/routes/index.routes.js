import { Router } from 'express';
import { index } from "../controllers/index.controller.js";

const router = Router();

router.get('/',index.home);

router.get('/about',index.about);

router.get('/contact',index.contact);

export default router;