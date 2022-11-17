import { Request, Response } from "express";
import * as workoutsRepository from '../repositories/workouts-repository.js';
import { Workout, WorkoutEntity, WorkoutUpdate } from '../protocols/workout-protocol.js'
import { createdResponse, noContentResponse, okResponse, serverErrorResponse } from "../helper/responses.js";

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
        return okResponse(res, workouts)
    } catch (error) {
        serverErrorResponse(res, error);
    }
};

async function update(req: Request, res: Response) {
    const { updates, workout } = res.locals as { updates: WorkoutUpdate, workout: WorkoutEntity};

    try {
        workoutsRepository.update(updates.weight, updates.series, updates.repetitions, workout.id);
        return noContentResponse(res);
    } catch (error) {
        return serverErrorResponse(res, error);
    }
};

async function remove(req: Request, res: Response) {
    const workout = res.locals.workout as WorkoutEntity;

    try {
        await workoutsRepository.remove(workout.id);
        return noContentResponse(res);
    } catch (error) {
        return serverErrorResponse(res, error);
    }
};

async function listByMuscle(req: Request, res: Response) {
    const { muscleName } = req.params;

    try {
        const workouts = await workoutsRepository.getWorkoutsByMuscleName(muscleName);
        return okResponse(res, workouts);
    } catch (error) {
        return serverErrorResponse(res, error);
    }
}

export {
    post,
    listAll,
    update,
    remove,
    listByMuscle
};