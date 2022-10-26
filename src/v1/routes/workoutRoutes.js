const express = require('express')
const router = express.Router()
const workoutController = require('../../controller/workoutController')

router
    .get('/',workoutController.getAllWorkouts)
    .get("/:workoutId",workoutController.getOneWorkouts)
    .post("/",workoutController.createNewWorkout)
    .patch("/:workoutId",workoutController.updateOneWorkout)
    .delete("/:workoutId",workoutController.deleteOneWorkout)

module.exports = router;