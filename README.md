### **GET /workouts**
Returns an array containing all the workouts:
```json
[
    {
        "id": 2,
        "name": "Leg Press",
        "muscle": "Perna",
        "weight": 350,
        "series": 20,
        "repetitions": 38
    },
    {
        "id": 7,
        "name": "Crucifixo Reto",
        "muscle": "Peito",
        "weight": 9000,
        "series": 754,
        "repetitions": 89
    }
]
```
___

### **GET /workouts/:muscleName**
Returns an array containing all the workouts for the specific muscle:

Example (**GET /workouts/Perna**):
```json
[
    {
        "id": 2,
        "name": "Leg Press",
        "muscle": "Perna",
        "weight": 350,
        "series": 20,
        "repetitions": 38
    },
    {
        "id": 4,
        "name": "Cadeira Extensora",
        "muscle": "Perna",
        "weight": 4980,
        "series": 522,
        "repetitions": 88
    }
]
```
___

### **POST /workouts**
Send a body like following:
Body:
```json
{
    "name": "Cadeira Extensora",
    "muscle": "Perna",
    "weight": 4980,
    "series": 522,
    "repetitions": 88
}
```

it will only work if the exercise doesn't already exists in the database.
___

### **PUT /workouts/:workoutId**

Example(**PUT /workouts/2**)Send a body like following:

Body:
```json
{
    "weight": 50,
    "series": 4,
    "repetitions": 12
}
```
the exercise will then be like:
```json
{
    "id": 2,
    "name": "Leg Press",
    "muscle": "Perna",
    "weight": 50,
    "series": 4,
    "repetitions": 12
}
```
won't return anything.
___

### **DELETE /workouts/:workoutId**
Removes the workout corresponding to the workoutId
