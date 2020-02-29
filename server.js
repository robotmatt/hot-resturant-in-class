const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

let tables = [
    {
        name: "Bob",
        phoneNumber: "444-333-2222",
        email: "no@spam.com",
        id: "1"
    }
];
let waitlist = [
    {
        name: "Sally",
        phoneNumber: "444-333-2222",
        email: "lotsof@spam.com",
        id: "2"
    }
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

// Default routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/", "home.html"));
});

// API Routes
app.get("/api/tables", function (req, res) {
    res.json(tables);
});
app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });