const workoutServices = require('../services/workoutServices')

const getAllWorkouts = (req,res)=>{
    const allWorkouts = workoutServices.getAllWorkouts()
    res.send({status:'OK',data:allWorkouts})
}

const getOneWorkouts = (req,res)=>{
    const oneWorkout = workoutServices.getOneWorkouts(req.params.workoutId)
    res.send(`get workout ${req.params.workoutId} `)
}

const createNewWorkout = (req,res)=>{
    const {body} = req
    if(!body.name || 
        !body.mode || 
        !body.equipment || 
        !body.exercises || 
        !body.trainerTips){
            return;
    }
    
    const newWorkout = {
        name:body.name,
        mode:body.mode,
        equipment:body.equipment,
        exercises:body.exercises,
        trainerTips:body.trainerTips,
    }

    const createWorkout = workoutServices.createNewWorkout(newWorkout)

    res.status(201).send({status:"OK",data:createWorkout})
}

const updateOneWorkout = (req,res)=>{
    const updateWorkout = workoutServices.updateOneWorkout(req.params.workoutId)
    res.send(`update workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req,res)=>{
    workoutServices.deleteOneWorkout(req.params.workoutId)
    res.send(`delete workout ${req.params.workoutId}`)
}

module.exports={
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}