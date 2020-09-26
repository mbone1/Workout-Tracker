let express = require("express");
let mongoose = require("mongoose");
let morgan = require("morgan");
const workout = require("./models");

let PORT = process.env.PORT || 8080;
let app = express();

//serve static content
app.use(express.static("public"));

//parse the app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParse: true });

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//spin up server
app.listen(PORT, function() {
    //logs the server connection
    console.log("Server listening on: http://localhost:" + PORT);
});