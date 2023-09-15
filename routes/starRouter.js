import { Router } from "express";
import {
    getStarById,
    getStars,
    postStart
} from '../controllers/starController.mjs';

const router = Router();

router.get('/stars', getStars);

router.get('/stars/:id', getStarById)

router.post('/stars', postStart)


export default router;