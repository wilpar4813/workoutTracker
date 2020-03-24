const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//Create an isatance of express and assign to the constant app
const app = express();

//Assign heroku port or port 3000 for localhost
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

//Setup Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set the public folder as the rooty directory
app.use(express.static("public"));

// Connect to mongodb or local db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//Route setup. Import api and html routes
require("./routes/apiRoutes.js");
require("./routes/htmlRoutes.js");

//Start listening on assigned porty
app.listen(PORT, function() {
    console.log(`App listening on Port ${PORT}!`);
});
