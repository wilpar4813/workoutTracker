const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//Create an isatance of express and assign to the constant app
const app = express();

//Assign heroku port or port 3000 for localhost
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

//Setup Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set the public folder as the root directory
app.use(express.static("public"));

// Connect to mongodb or local db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Route setup. Import api and html routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//Start listening on assigned porty
app.listen(PORT, function() {
    console.log(`App listening on Port ${PORT}!`);
});
