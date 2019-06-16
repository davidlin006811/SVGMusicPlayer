var express = require("express");
var app = express();
var path = require("path");
//set view engine
app.set("view engine", "ejs");
//set path
app.use(express.static(path.join(__dirname, "public")));
//home route
app.get("/", function(req, res) {
    res.render("phone.ejs");
})
app.listen(8000);
console.log("Server is running");