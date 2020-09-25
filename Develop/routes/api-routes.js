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
    })
    app.post("/api/workouts", async function(req, res) {
        const res = await
        console.log("hingus")
            // db.Workout.create(req.body)
            // .then(({ _id })=> db.Workout.findOneAndUpdate({},{
            //     $push: {}
            // }))



    })






}