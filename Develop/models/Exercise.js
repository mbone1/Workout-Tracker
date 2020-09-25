let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number,
    duration: Number,

})

const Exercises = mongoose.model("Workout", ExercisesSchema);

module.exports = Workout;