import { Request, Response } from "express";
import * as workoutsRepository from '../repositories/workouts-repository.js';
import { Workout } from '../protocols/workout-protocol.js'
import { createdResponse, okResponse, serverErrorResponse } from "../helper/responses.js";

async function post(req: Request, res: Response) {
    const workout = res.locals.workout as Workout;

    try {
        const inserted = await workoutsRepository.post(workout.name, workout.muscle, workout.weight, workout.series, workout.repetitions);
        return createdResponse(res)
    } catch (error) {
        serverErrorResponse(res, error);
    }
};

async function listAll(req: Request, res: Response) {
    try {
        const workouts = await workoutsRepository.getWorkouts();
        return okResponse(res, workouts.rows)
    } catch (error) {
        serverErrorResponse(res, error);
    }
};

export {
    post,
    listAll
};