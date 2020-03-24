const workOutdb = require("../models/workout.js");

module.export = function(app) {
    app.get("/api/workouts", res => {
        workOutdb
            .find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log("The following error has occured: ", err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        workOutdb
            .findByIdAndUpdate(params.id, { $push: { exercises: req.body } })

            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log("The following error has occurred: ", err);
                res.json(err);
            });
    });

    // POST to create workout
    app.post("/api/workouts", (req, res) => {
        workOutdb
            .create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log("The following error has occured: ", err);
                res.json(err);
            });
    });

    // Get workouts from range
    app.get("/api/workouts/:range", (req, res) => {
        db.Workouts.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log("The following error has occured: ", err);
                res.json(err);
            });
    });
};
