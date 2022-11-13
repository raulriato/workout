type WorkoutEntity = {
    id: number,
    name: string,
    muscle: string,
    weight: number,
    series: number,
    repetitions: number
};

type Workout = Omit<WorkoutEntity, 'id'>;

export {
    Workout,
    WorkoutEntity
}