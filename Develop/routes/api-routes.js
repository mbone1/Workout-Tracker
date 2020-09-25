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


        // console.vlog(req)

        //res.json(await db.Workout.find())
    })

    // app.put("/api/workouts/:id", async function(req, res) {

    // })

    // app.post("/api/workouts", async function(req, res) {
    //     res.json(await db.Workout.create(req.body));

    // })

    // app.get("/workouts/range", async function(req, res) {
    //     res.json(await db.Workout.find().limit(7))
    // });




}