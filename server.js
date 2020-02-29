var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });