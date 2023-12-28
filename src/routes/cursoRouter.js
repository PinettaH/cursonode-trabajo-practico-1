import { Router } from "express";
import { validateCursoBody, validateUpdateCursoBody } from '../middlewares/validationMiddleware.js'
import {
    deleteCursoByIdController,
    getCursoByIdController,
    getCursosController,
    patchCursoController,
    postCurso
} from "../controllers/cursoController.mjs";
export const router = Router();

router.post('/', validateCursoBody, postCurso)

router.get('/', getCursosController)

router.get('/:id', getCursoByIdController)

router.patch('/:id', validateUpdateCursoBody, patchCursoController)

router.delete('/:id', deleteCursoByIdController)

