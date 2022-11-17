import { prisma } from "../database/postgres.js";
import { WorkoutEntity } from "../protocols/workout-protocol.js";

async function post(name: string, muscle: string, weight: number, series: number, repetitions: number): Promise<WorkoutEntity> {
    return prisma.workouts.create({
        data: {
            name,
            muscle,
            weight,
            series,
            repetitions
        }
    })
};

async function getWorkoutByName(name: string): Promise<WorkoutEntity> {
    return prisma.workouts.findUnique({
        where: {
            name
        }
    })
};

async function getWorkoutById(id: number): Promise<WorkoutEntity> {
    return prisma.workouts.findUnique({
        where: {
            id
        }
    })
};

async function getWorkouts(): Promise<WorkoutEntity[]> {
    return prisma.workouts.findMany();
};

async function update(weight: number, series: number, repetitions: number, id: number): Promise<WorkoutEntity> {
    return prisma.workouts.update({
        where: {
            id
        },
        data: {
            weight,
            series,
            repetitions
        }
    })
};

async function remove(id: number): Promise<WorkoutEntity> {
    return prisma.workouts.delete({
        where: {
            id
        }
    })
};

async function getWorkoutsByMuscleName(muscle: string): Promise<WorkoutEntity[]> {
    return prisma.workouts.findMany({
        where: {
            muscle
        }
    })
};

export {
    post,
    getWorkoutByName,
    getWorkoutById,
    getWorkouts,
    update,
    remove,
    getWorkoutsByMuscleName
};