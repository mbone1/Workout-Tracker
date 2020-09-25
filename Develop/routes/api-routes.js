const { Workout } = require("../models")
    // const app = express();
const db = require("../models")

module.exports = function(app) {
    app.get("/api/workouts", async function(req, res) {
        let findResponse = await findAll()

        function findAll() {
            return db.Workout.find({})
        }
        res.json(findResponse)
        console.log(req)
    })
    app.post("/api/workouts", async function(req, res) {
        let newWorkoutRes = await createWorkout();
        let workout = new Workout(body);
        Workout.create(workout).then(dbWorkout => {
            res.json(dbWorkout)
        })



    })






}