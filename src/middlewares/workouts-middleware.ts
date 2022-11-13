import { updateSchema, workoutSchema } from "../schemas/workouts-schema.js";
import { Request, Response, NextFunction } from "express";
import { Workout, WorkoutUpdate } from "../protocols/workout-protocol.js";
import { badRequestResponse, conflictResponse, notFoundRequestResponse, serverErrorResponse, unprocessableRequestResponse } from "../helper/responses.js";
import { getWorkoutById, getWorkoutByName } from '../repositories/workouts-repository.js'

async function workoutMiddleware(req: Request, res: Response, next: NextFunction) {
    const workout = req.body as Workout;
    const { error } = workoutSchema.validate(workout, { abortEarly: false });

    if (error) {
        const messages = error.details.map(detail => detail.message)
        return unprocessableRequestResponse(res, messages);
    };

    try {
        const verifiedWorkout = await getWorkoutByName(workout.name);

        if (verifiedWorkout.rowCount > 0) {
            return conflictResponse(res, `o treino ${workout.name} já existe`);
        };
    } catch (error) {
        return serverErrorResponse(res, error);
    }

    res.locals.workout = workout;

    next();
};

async function updateMiddleware(req: Request, res: Response, next: NextFunction) {
    const { workoutId } = req.params;
    const updates = req.body as WorkoutUpdate;

    if (!Number(workoutId)) {
        return badRequestResponse(res);
    };

    const { error } = updateSchema.validate(updates);

    if (error) {
        const messages = error.details.map(detail => detail.message);
        return unprocessableRequestResponse(res, messages);
    };

    try {
        const id = Number(workoutId);
        const verifiedWorkout = await getWorkoutById(id);

        if (verifiedWorkout.rowCount === 0) {
            return notFoundRequestResponse(res);
        }

        res.locals.updates = updates;
        res.locals.workout = verifiedWorkout.rows[0];
        next();
    } catch (error) {
        return serverErrorResponse(res, error);
    }
}

export {
    workoutMiddleware,
    updateMiddleware
};