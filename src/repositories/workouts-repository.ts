import { connection } from "../database/postgres.js";
import { Query, QueryResult } from "pg";
import { Workout, WorkoutEntity } from "../protocols/workout-protocol.js";

async function post(name: string, muscle: string, weight: number, series: number, repetitions: number): Promise<QueryResult<Workout>> {
    return connection.query(
        `
            INSERT INTO workouts (name, muscle, weight, series, repetitions)
            VALUES ($1, $2, $3, $4, $5);
        `, [name, muscle, weight, series, repetitions]
    )
};

async function getWorkoutByName(name: string): Promise<QueryResult<WorkoutEntity>> {
    console.log('fez a requisição', name);
    return connection.query(
        `
            SELECT * FROM workouts WHERE name ILIKE $1;
        `, [name]
    )
};

async function getWorkoutById(id: number): Promise<QueryResult<WorkoutEntity>> {
    return connection.query(
        `
            SELECT * FROM workouts WHERE id = $1;
        `, [id]
    )
};

async function getWorkouts(): Promise<QueryResult<WorkoutEntity>> {
    return connection.query(`SELECT * FROM workouts`);
};

async function update(weight: number, series: number, repetitions: number, id: number): Promise<QueryResult> {
    return connection.query(
        `
            UPDATE workouts SET weight = $1, series = $2, repetitions = $3 WHERE id = $4;
        `, [weight, series, repetitions, id]
    )
};

async function remove(id: number) {
    return connection.query(
        `
            DELETE FROM workouts WHERE id = $1;
        `, [id]
    )
};

async function getWorkoutsByMuscleName(muscle: string) {
    return connection.query(
        `
            SELECT * FROM workouts WHERE muscle ILIKE $1;
        `, [muscle]
    )
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