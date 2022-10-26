const db = require('./db.json')
const {saveToDatabase} = require('./utils')

const getAllWorkouts = ()=>{
    return db.workouts
}

const createNewWorkout = (newWorkout)=>{
    const isAlreadtAdded = db.workouts.findIndex((workout)=> workout.name === newWorkout.name)
    if(isAlreadtAdded){
        return;
    }
    db.workouts.push(newWorkout)
    saveToDatabase(db)
}

module.exports = {getAllWorkouts,createNewWorkout}