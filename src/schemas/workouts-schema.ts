import joi from 'joi';

const workoutSchema = joi.object({
    name: joi.string().trim().required(),
    muscle: joi.string().trim().required(),
    weight: joi.number().integer().positive().required(),
    series: joi.number().integer().positive().required(),
    repetitions: joi.number().integer().positive().required()
});

const updateSchema = joi.object({
    weight: joi.number().integer().positive().required(),
    series: joi.number().integer().positive().required(),
    repetitions: joi.number().integer().positive().required(),
});

export {
    workoutSchema,
    updateSchema
};