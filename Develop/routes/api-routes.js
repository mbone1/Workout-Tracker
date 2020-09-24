// const app = express();

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        res.json("sping the dingus!")
    })



}