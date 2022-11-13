import { connection } from "../database/postgres.js";
import { QueryResult } from "pg";
import { Workout } from "../protocols/workout-protocol.js";

async function post(name: string, muscle: string, weight: number, series: number, repetitions: number): Promise<QueryResult<Workout>> {
    return connection.query(
        `
            INSERT INTO workouts (name, muscle, weight, series, repetitions)
            VALUES ($1, $2, $3, $4, $5);
        `, [name, muscle, weight, series, repetitions]
    )
};

async function getWorkoutByName(name: string): Promise<QueryResult<Workout>> {
    return connection.query(
        `
            SELECT * FROM workouts WHERE name ILIKE '$1';
        `, [name]
    )
};

export {
    post,
    getWorkoutByName
};