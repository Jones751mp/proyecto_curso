import { Router } from "express";
import { platos } from "../controllers/platos.controller.js";

const router = Router();

router.route('/') // esta es para obtener informacion de los platos
    .get(platos.getPlatos)
    .post(platos.createPlato)

router.route('/:id')
    .get(platos.getPlatoById)
    .delete(platos.deletePlatoById)
    .put()

router.get('/create/plato',platos.renderCreatePlato)
router.get('/update/:id',platos.renderUpdatePlato)

//publicar datos
//eliminar platos

//actualizar platos

export default router;