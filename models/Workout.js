let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: {
                type: String,
                trim: true,
                required: "Enter Exercise Type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }

        }]

    },

    {
        toJSON: {
            virtuals: true
        }
    }

)


// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;