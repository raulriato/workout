import { workoutSchema } from "../schemas/workouts-schema.js";
import { Request, Response, NextFunction } from "express";
import { Workout } from "../protocols/workout-protocol.js";
import { conflictResponse, unprocessableRequestResponse } from "../helper/responses.js";
import { getWorkoutByName } from '../repositories/workouts-repository.js'

async function workoutMiddleware(req: Request, res: Response, next: NextFunction) {
    const workout = req.body as Workout;
    const { error } = workoutSchema.validate(workout, {abortEarly: false});

    if (error) {
        const messages = error.details.map(detail => detail.message)
        return unprocessableRequestResponse(res, messages);
    };

    const verifiedWorkout = await getWorkoutByName(workout.name);

    if (verifiedWorkout.rowCount > 0) {
        return conflictResponse(res, `o treino ${workout.name} já existe`);
    };

    res.locals.workout = workout;

    next();
};

export { workoutMiddleware };