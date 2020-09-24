module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("../asdfasdfasdf/index.html")
    })
    app.get("/stats", function(req, res) {
        res.render("../public/stats")
    })

    // app.get("/stats", function(req, res) {
    //         res.render("../public/stats.html")
    //     })
    // app.get("/exercise", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/exercise.html"))
    // })



};