const workout = require('../db/Workout')
const {v4:uuid} = require('uuid')

const getAllWorkouts = ()=>{
    const allWorkouts = workout.getAllWorkouts()
    return allWorkouts;
}
const getOneWorkouts = (newWorkout)=>{
    const workoutInsert = {
        ...newWorkout,
        id:uuid(),
        createAt:new Date().toLocaleString("en-US",{timezone:"UTC"}),
        createAt:new Date().toLocaleString("en-US",{timezone:"UTC"}), 
    }
    const createWorkout = workout.createNewWorkout(workoutInsert)
    return createWorkout;
}
const createNewWorkout = ()=>{
    return;
}
const updateOneWorkout = ()=>{
    return;
}
const deleteOneWorkout = ()=>{
    return;
}


module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}
