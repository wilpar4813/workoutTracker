// HTML ROUTES
var path = require("path");
module.exports = function(app) {
    app.get("/", res => {
        res.sendFile(path.join(__dirname + "/public/index.html"));
    });

    app.get("/exercise", res => {
        res.sendFile(path.join(__dirname + "/public/exercise.html"));
    });

    app.get("/stats", res => {
        res.sendFile(path.join(__dirname + "/public/stats.html"));
    });
};
