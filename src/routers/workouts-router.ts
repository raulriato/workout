import { Router } from "express";
import * as workoutsMiddleware from "../middlewares/workouts-middleware.js";
import * as workoutsController from '../controllers/workouts-controller.js'

const router = Router();

router.post('/workouts', workoutsMiddleware.post, workoutsController.post);
router.get('/workouts', workoutsController.listAll);
router.put('/workouts/:workoutId', workoutsMiddleware.update, workoutsController.update);
router.delete('/workouts/:workoutId', workoutsMiddleware.remove, workoutsController.remove);

export default router;