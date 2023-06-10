import { Router } from "express";
import { platos } from "../controllers/platos.controller.js";

const router = Router();

router.route('/') // esta es para obtener informacion de los platos
    .get(platos.getPlatos)
    .post()

router.route('/:id')
    .get(platos.getPlatoById)
    .delete()
    .put()
//publicar datos
//eliminar platos

//actualizar platos

export default router;