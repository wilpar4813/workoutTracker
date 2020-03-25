const app = require("express").Router();
const workOut = require("../models/workout.js");

app.get("/api/workouts", function(res) {
    workOut
        .find({})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log("The following error has occured: ", err);
        });
});

app.put("/api/workouts/:id", function(req, res) {
    workOut
        .findByIdAndUpdate(
            params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )

        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log("The following error has occurred: ", err);
            res.json(err);
        });
});

// POST to create workout
app.post("/api/workouts", function(res) {
    console.log("Adding a new Exercise");
    workOut
        .create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("The following error has occured: ", err);
            res.json(err);
        });
});

// Get workouts from range
app.get("/api/workouts/range", function(res) {
    workOut
        .find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("The following error has occured: ", err);
            res.json(err);
        });
});

module.exports = app;
