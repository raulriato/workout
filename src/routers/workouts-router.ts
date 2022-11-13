import { Router } from "express";
import { workoutMiddleware } from "../middlewares/workouts-middleware.js";
import * as workoutsController from '../controllers/workouts-controller.js'

const router = Router();

router.post('/workouts', workoutMiddleware, workoutsController.post);

export default router;