const app = require("express").Router();
const workOut = require("../models/workout.js");


app.get("/api/workouts", function(req, res) {
    console.log("Line 5 API");
    workOut
        .find({})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(
                "The following error has occured line 13 apiRoutes.js: ",
                err
            );
        });
});

app.put("/api/workouts/:id", function({ body, params }, res) {
    workOut
        .findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        )
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(
                "The following error has occurred line 29 apiRoutes.js: ",
                err
            );
            res.json(err);
        });
});

// Create workout
app.post("/api/workouts", function(req, res) {
    console.log("Adding a new Exercise");
    workOut
        .create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(
                "The following error has occurred line 43 apiRoutes.js: ",
                err
            );
            res.json(err);
        });
});

//GET stats for dashboard
app.get("/stats", function(req, res) {
    workOut
        .find({})
        .then(function(data) {
            console.log("Line 61 apiRoute:");
            res.json(data);
        })
        .catch(err => {
            console.log(
                "The following error has occurred line 67 apiRoutes.js: ",
                err
            );
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    workOut
        .find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = app;
