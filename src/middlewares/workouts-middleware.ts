import { workoutSchema } from "../schemas/workouts-schema.js";
import { Request, Response, NextFunction } from "express";
import { Workout } from "../protocols/workout-protocol.js";
import { unprocessableRequestResponse } from "../helper/responses.js";

function workoutMiddleware(req: Request, res: Response, next: NextFunction) {
    const workout = req.body as Workout;
    const { error } = workoutSchema.validate(workout, {abortEarly: false});

    if (error) {
        const messages = error.details.map(detail => detail.message)
        return unprocessableRequestResponse(res, messages);
    }

    res.locals.workout = workout;

    next();
};

export { workoutMiddleware };